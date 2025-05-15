
import React from "react";
import BookingCalendar from "@/components/booking/BookingCalendar";
import BookingConfirmation from "@/components/booking/BookingConfirmation";

interface BookingContainerProps {
  isConfirmed: boolean;
  bookingDetails: any;
  contactDetails: any;
  onBookingComplete: (date: Date, time: string) => void;
}

const BookingContainer: React.FC<BookingContainerProps> = ({
  isConfirmed,
  bookingDetails,
  contactDetails,
  onBookingComplete
}) => {
  return (
    <section className="section-padding bg-gray-50 px-4 sm:px-6">
      <div className="container-custom">
        {!isConfirmed ? (
          contactDetails ? (
            <BookingCalendar
              contactDetails={{
                ...contactDetails,
                service: contactDetails.package // Map package to service for BookingCalendar
              }}
              onBookingComplete={onBookingComplete}
            />
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hijau-blue mx-auto mb-4"></div>
              <p className="text-hijau-blue">Loading your booking details...</p>
            </div>
          )
        ) : (
          <BookingConfirmation bookingDetails={bookingDetails} />
        )}
      </div>
    </section>
  );
};

export default BookingContainer;
