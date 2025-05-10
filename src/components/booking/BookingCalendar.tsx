
import React, { useState, useEffect } from "react";
import { isSameDay } from "date-fns";
import CalendarSelector from "./calendar/CalendarSelector";
import TimeSlotSelector from "./calendar/TimeSlotSelector";
import BookingSummary from "./calendar/BookingSummary";
import ConfirmationPanel from "./calendar/ConfirmationPanel";
import HelpSection from "./calendar/HelpSection";
import BookingAlert from "./calendar/BookingAlert";

// This will be replaced with the actual bookings from localStorage
const UNAVAILABLE_SLOTS = [
  { date: new Date(2025, 4, 15), time: "10:00" },
  { date: new Date(2025, 4, 15), time: "11:00" },
  { date: new Date(2025, 4, 16), time: "14:00" },
];

interface BookingCalendarProps {
  contactDetails: {
    name: string;
    phone: string;
    email: string;
    address: string;
    service: string;
  };
  onBookingComplete: (date: Date, time: string) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ 
  contactDetails, 
  onBookingComplete 
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [bookedSlots, setBookedSlots] = useState<Array<{date: Date, time: string}>>([]);

  // Load existing bookings from localStorage on component mount
  useEffect(() => {
    const storedBookings = localStorage.getItem("hijauBookings");
    if (storedBookings) {
      try {
        const bookings = JSON.parse(storedBookings);
        // Convert string dates back to Date objects
        const formattedBookings = bookings.map((booking: any) => ({
          date: new Date(booking.date),
          time: booking.time
        }));
        setBookedSlots(formattedBookings);
      } catch (error) {
        console.error("Error parsing bookings:", error);
        setBookedSlots(UNAVAILABLE_SLOTS);
      }
    } else {
      setBookedSlots(UNAVAILABLE_SLOTS);
    }
  }, []);

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time selection when date changes
  };

  // Handle time slot selection
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  // Check if a time slot is available (not booked)
  const isTimeSlotAvailable = (date: Date, time: string) => {
    return !bookedSlots.some(
      (slot) => 
        isSameDay(new Date(slot.date), date) && 
        slot.time === time
    );
  };

  // Handle final booking submission
  const handleBookingSubmit = () => {
    if (selectedDate && selectedTime) {
      // Do one final check to make sure the slot is still available
      if (!isTimeSlotAvailable(selectedDate, selectedTime)) {
        alert("Sorry, this time slot was just booked by someone else. Please select another time.");
        return;
      }
      onBookingComplete(selectedDate, selectedTime);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 transition-all hover:shadow-2xl border border-gray-100 animate-fade-in">
      <h2 className="heading-medium text-hijau-blue mb-8 relative inline-block">
        Choose Your Appointment Date & Time
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-hijau-yellow rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Side */}
        <div className="space-y-6">
          <CalendarSelector
            selectedDate={selectedDate}
            currentMonth={currentMonth}
            onDateSelect={handleDateSelect}
            onMonthChange={setCurrentMonth}
          />
          
          {selectedDate && (
            <TimeSlotSelector
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onTimeSelect={handleTimeSelection}
              bookedSlots={bookedSlots}
            />
          )}
          
          <BookingAlert />
        </div>

        {/* Booking Details Side */}
        <div className="space-y-6">
          <BookingSummary contactDetails={contactDetails} />

          {selectedDate && selectedTime && (
            <ConfirmationPanel
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onBookingSubmit={handleBookingSubmit}
            />
          )}

          <HelpSection />
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
