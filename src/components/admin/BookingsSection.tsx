
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

  return (
    <div className="p-6">
      <BookingStats bookings={bookings} loading={loading} totalBookings={bookings.length} todayBookings={0} />
      <AddBookingForm onBookingAdded={handleBookingAdded} />
      <BookingsList bookings={bookings} loading={loading} onDeleteBooking={() => {}} />
      <DateFilter selectedDate={selectedDate} onSelectDate={setSelectedDate} />
    </div>
  );
};

export default BookingsSection;
