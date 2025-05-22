
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import BookingStats from "./BookingStats";
import BookingsList from "./BookingsList";
import AddBookingForm from "./booking-form";
import DateFilter from "./DateFilter";
import { BarChart, Calendar } from "lucide-react";

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

  // Handler for updating payment status
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
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-hijau-blue mb-2 flex items-center">
          <BarChart className="mr-2 h-6 w-6 text-hijau-yellow" />
          Booking Management
        </h1>
        <p className="text-gray-600">Manage and track all appointment details</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left sidebar with filters and stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold text-hijau-blue mb-4 flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-hijau-yellow" />
              Filter Bookings
            </h2>
            <DateFilter selectedDate={selectedDate} onSelectDate={setSelectedDate} />
          </div>
          
          <BookingStats 
            bookings={bookings} 
            loading={loading} 
            totalBookings={bookings.length} 
            todayBookings={0} 
          />
        </div>
        
        {/* Main content area */}
        <div className="lg:col-span-2 space-y-6">
          <AddBookingForm onBookingAdded={handleBookingAdded} />
          
          <BookingsList 
            bookings={bookings} 
            loading={loading} 
            onDeleteBooking={() => {}} 
            onUpdatePaymentStatus={handleUpdatePaymentStatus}
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingsSection;
