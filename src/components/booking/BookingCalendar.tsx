
import React, { useState, useEffect } from "react";
import { isSameDay } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import CalendarSelector from "./calendar/CalendarSelector";
import TimeSlotSelector from "./calendar/TimeSlotSelector";
import BookingSummary from "./calendar/BookingSummary";
import ConfirmationPanel from "./calendar/ConfirmationPanel";
import HelpSection from "./calendar/HelpSection";
import BookingAlert from "./calendar/BookingAlert";

interface BookingCalendarProps {
  contactDetails: {
    name: string;
    phone: string;
    email: string;
    address: string;
    package: string;  // Changed from service to match the existing code
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
  const { toast } = useToast();

  // Load existing bookings from Supabase on component mount
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('date, time');
        
        if (error) {
          console.error("Error fetching bookings:", error);
          toast({
            title: "Error",
            description: "Could not load existing bookings. Please try again.",
            variant: "destructive",
          });
          return;
        }
        
        // Convert string dates back to Date objects
        const formattedBookings = data.map((booking) => ({
          date: new Date(booking.date),
          time: booking.time
        }));
        
        setBookedSlots(formattedBookings);
      } catch (error) {
        console.error("Error in fetchBookings:", error);
      }
    };

    fetchBookings();
  }, [toast]);

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
        toast({
          title: "Booking Error",
          description: "Sorry, this time slot was just booked by someone else. Please select another time.",
          variant: "destructive",
        });
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
