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
      <BookingStats bookings={bookings} loading={loading} />
      <AddBookingForm onBookingAdded={handleBookingAdded} />
      <BookingsList bookings={bookings} loading={loading} />
      <DateFilter />
    </div>
  );
};

export default BookingsSection;
