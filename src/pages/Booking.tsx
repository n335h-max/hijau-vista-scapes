
import React from "react";
import { useBooking } from "@/hooks/use-booking";
import BookingHero from "@/components/booking/BookingHero";
import BookingProcess from "@/components/booking/BookingProcess";
import BookingContainer from "@/components/booking/BookingContainer";

const BookingPage = () => {
  const {
    isConfirmed,
    bookingDetails,
    contactDetails,
    handleBookingComplete
  } = useBooking();

  return (
    <>
      <BookingHero />
      <BookingProcess />
      <BookingContainer
        isConfirmed={isConfirmed}
        bookingDetails={bookingDetails}
        contactDetails={contactDetails}
        onBookingComplete={handleBookingComplete}
      />
    </>
  );
};

export default BookingPage;
