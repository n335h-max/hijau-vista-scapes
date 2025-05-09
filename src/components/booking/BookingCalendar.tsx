
import React, { useState, useEffect } from "react";
import { format, addDays, startOfWeek, addWeeks, isToday, isSameDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

// Time slots available for booking (24-hour format) - Updated to 9am-5:30pm
const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "17:30"
];

// This will be replaced with the actual bookings from localStorage
const UNAVAILABLE_SLOTS = [
  { date: new Date(2025, 4, 15), time: "09:00" },
  { date: new Date(2025, 4, 15), time: "10:00" },
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

  // Check if a time slot is available (not booked)
  const isTimeSlotAvailable = (date: Date, time: string) => {
    return !bookedSlots.some(
      (slot) => 
        isSameDay(new Date(slot.date), date) && 
        slot.time === time
    );
  };

  // Get available time slots for the selected date
  const getAvailableTimeSlots = (date: Date) => {
    return TIME_SLOTS.filter(time => isTimeSlotAvailable(date, time));
  };

  // Handle time slot selection
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
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
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-hijau-blue">
                {format(currentMonth, "MMMM yyyy")}
              </h3>
              <div className="flex space-x-2">
                <Button
                  onClick={() => setCurrentMonth(addWeeks(currentMonth, -1))}
                  variant="outline"
                  className="h-8 w-8 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setCurrentMonth(addWeeks(currentMonth, 1))}
                  variant="outline"
                  className="h-8 w-8 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                setSelectedTime(null); // Reset time selection when date changes
              }}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              className={cn("p-3 pointer-events-auto rounded-md border")}
              disabled={[
                { before: new Date() },
                // Disable Sundays only - updated to allow Saturdays
                (date) => {
                  const day = date.getDay();
                  return day === 0; // 0 is Sunday
                },
              ]}
              // Highlight days with available slots
              modifiers={{
                today: (date) => isToday(date),
              }}
              modifiersStyles={{
                today: { fontWeight: "bold", backgroundColor: "rgba(14, 165, 233, 0.1)" },
              }}
            />
          </div>

          {selectedDate && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-hijau-blue mb-4 flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Available Time Slots for {format(selectedDate, "EEEE, MMMM d")}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {getAvailableTimeSlots(selectedDate).map((time) => (
                  <Button
                    key={time}
                    onClick={() => handleTimeSelection(time)}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={cn(
                      "transition-all",
                      selectedTime === time
                        ? "bg-hijau-blue hover:bg-hijau-blue/90"
                        : "hover:border-hijau-blue/50"
                    )}
                  >
                    {time}
                  </Button>
                ))}
              </div>
              {getAvailableTimeSlots(selectedDate).length === 0 && (
                <div className="text-center py-6 text-gray-500 bg-gray-100 rounded-lg border border-gray-200 mt-2">
                  <CalendarIcon className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                  <p className="font-medium">No available slots for this date</p>
                  <p className="text-sm mt-1">Please select another date</p>
                </div>
              )}
            </div>
          )}
          
          {/* Alert for booked slots */}
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-800">Booking Information</h4>
                <p className="text-sm text-amber-700 mt-1">
                  Time slots that are already booked will not be shown. We only display available time slots to prevent double bookings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Details Side */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-hijau-blue mb-4">Booking Summary</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{contactDetails.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact</p>
                <p className="font-medium">{contactDetails.phone}</p>
                <p className="text-sm">{contactDetails.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Service</p>
                <p className="font-medium">{contactDetails.service}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">{contactDetails.address}</p>
              </div>
            </div>
          </div>

          {selectedDate && selectedTime && (
            <div className="bg-hijau-blue/5 p-6 rounded-lg border border-hijau-blue/30 animate-fade-in">
              <h3 className="font-medium text-hijau-blue mb-2">Selected Appointment</h3>
              <p className="text-lg font-semibold">
                {format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime}
              </p>
              <Button
                onClick={handleBookingSubmit}
                className="w-full mt-4 bg-hijau-blue hover:bg-hijau-blue/90 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                size="lg"
              >
                Confirm Booking
              </Button>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-hijau-blue mb-2">Need help?</h3>
            <p className="text-sm text-gray-600 mb-2">
              Call us at <span className="font-medium">+60 3-2142-1234</span> if you 
              need assistance with your booking.
            </p>
            <p className="text-sm text-gray-600">
              Our booking hours are Monday to Friday, 9am to 5pm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
