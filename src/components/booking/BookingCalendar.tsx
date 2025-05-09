
import React, { useState } from "react";
import { format, addDays, startOfWeek, addWeeks, isToday, isSameDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Time slots available for booking (24-hour format)
const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"
];

// Mock data for unavailable slots - in a real app this would come from a database
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

  // Check if a time slot is available
  const isTimeSlotAvailable = (date: Date, time: string) => {
    return !UNAVAILABLE_SLOTS.some(
      (slot) => isSameDay(slot.date, date) && slot.time === time
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
              onSelect={setSelectedDate}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              className={cn("p-3 pointer-events-auto rounded-md border")}
              disabled={[
                { before: new Date() },
                // Disable weekends
                (date) => {
                  const day = date.getDay();
                  return day === 0 || day === 6;
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
                <p className="text-center py-4 text-gray-500">
                  No available slots for this date. Please select another date.
                </p>
              )}
            </div>
          )}
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
