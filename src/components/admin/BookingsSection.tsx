
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import BookingStats from "./BookingStats";
import BookingsList from "./BookingsList";
import AddBookingForm from "./booking-form";
import DateFilter from "./DateFilter";

const BookingsSection = () => {
  const { toast } = useToast();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("bookings").select("*");
      if (error) {
        toast({
          title: "Error fetching bookings",
          description: error.message,
          variant: "destructive",
        });
      } else {
        setBookings(data);
      }
      setLoading(false);
    };

    fetchBookings();
  }, [toast]);

  const handleBookingAdded = (newBooking) => {
    setBookings((prev) => [...prev, newBooking]);
  };

  // Add the missing handler for updating payment status
  const handleUpdatePaymentStatus = async (id: number | string, status: boolean) => {
    try {
      // Update the booking in Supabase
      const { error } = await supabase
        .from('bookings')
        .update({ payment_completed: status })
        .eq('id', String(id));
      
      if (error) {
        throw error;
      }
      
      // Update the booking in local state
      setBookings(prevBookings => 
        prevBookings.map(booking => 
          booking.id === id ? { ...booking, payment_completed: status } : booking
        )
      );
      
      toast({
        title: status ? "Payment Marked as Completed" : "Payment Marked as Pending",
        description: "The payment status has been successfully updated.",
      });
    } catch (error: any) {
      console.error("Error updating payment status:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to update payment status",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="p-6">
      <BookingStats bookings={bookings} loading={loading} totalBookings={bookings.length} todayBookings={0} />
      <AddBookingForm onBookingAdded={handleBookingAdded} />
      <BookingsList 
        bookings={bookings} 
        loading={loading} 
        onDeleteBooking={() => {}} 
        onUpdatePaymentStatus={handleUpdatePaymentStatus}
        selectedDate={selectedDate}
      />
      <DateFilter selectedDate={selectedDate} onSelectDate={setSelectedDate} />
    </div>
  );
};

export default BookingsSection;
