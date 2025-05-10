
import React from "react";
import AddBookingForm from "@/components/admin/AddBookingForm";
import BookingsList from "@/components/admin/BookingsList";

interface Booking {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
  address: string;
}

interface BookingsSectionProps {
  bookings: Booking[];
  selectedDate?: Date;
  onBookingAdded: (booking: Booking) => void;
  onDeleteBooking: (id: number | string) => void;
}

const BookingsSection: React.FC<BookingsSectionProps> = ({ 
  bookings, 
  selectedDate, 
  onBookingAdded,
  onDeleteBooking
}) => {
  return (
    <>
      <AddBookingForm onBookingAdded={onBookingAdded} />
      <BookingsList 
        bookings={bookings} 
        selectedDate={selectedDate}
        onDeleteBooking={onDeleteBooking}
      />
    </>
  );
};

export default BookingsSection;
