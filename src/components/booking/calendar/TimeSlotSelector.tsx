
import React from "react";
import { format, isSameDay } from "date-fns";
import { Button } from "@/components/ui/button";
import { Clock, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

interface TimeSlotSelectorProps {
  selectedDate: Date | undefined;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  bookedSlots: Array<{date: Date, time: string}>;
}

// Time slots available for booking (Wednesday and Friday only, 10am and 3pm)
const TIME_SLOTS = [
  "10:00",
  "15:00"
];

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({
  selectedDate,
  selectedTime,
  onTimeSelect,
  bookedSlots
}) => {
  const isMobile = useMobile();
  
  // Check if a time slot is available (not booked)
  const isTimeSlotAvailable = (date: Date, time: string) => {
    return !bookedSlots.some(
      (slot) => 
        isSameDay(new Date(slot.date), date) && 
        slot.time === time
    );
  };

  // Get available time slots for the selected date (same for all days)
  const getAvailableTimeSlots = (date: Date) => {
    return TIME_SLOTS.filter(time => isTimeSlotAvailable(date, time));
  };

  if (!selectedDate) return null;

  const availableTimeSlots = getAvailableTimeSlots(selectedDate);

  return (
    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
      <h3 className="font-medium text-hijau-blue mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
        <Clock className="mr-2 h-4 w-4" />
        Available Times for {format(selectedDate, "EEEE, MMMM d")}
      </h3>
      <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-3'} gap-2`}>
        {availableTimeSlots.map((time) => (
          <Button
            key={time}
            onClick={() => onTimeSelect(time)}
            variant={selectedTime === time ? "default" : "outline"}
            className={cn(
              "transition-all text-xs sm:text-sm py-1 h-auto",
              selectedTime === time
                ? "bg-hijau-blue hover:bg-hijau-blue/90"
                : "hover:border-hijau-blue/50"
            )}
          >
            {time}
          </Button>
        ))}
      </div>
      {availableTimeSlots.length === 0 && (
        <div className="text-center py-4 sm:py-6 text-gray-500 bg-gray-100 rounded-lg border border-gray-200 mt-2">
          <CalendarIcon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto text-gray-400 mb-2" />
          <p className="font-medium text-sm sm:text-base">No available slots for this date</p>
          <p className="text-xs sm:text-sm mt-1">Please select another date</p>
        </div>
      )}
    </div>
  );
};

export default TimeSlotSelector;
