
import React from "react";
import { format, addWeeks, isToday, isSameDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

interface CalendarSelectorProps {
  selectedDate: Date | undefined;
  currentMonth: Date;
  onDateSelect: (date: Date | undefined) => void;
  onMonthChange: (date: Date) => void;
}

const CalendarSelector: React.FC<CalendarSelectorProps> = ({
  selectedDate,
  currentMonth,
  onDateSelect,
  onMonthChange
}) => {
  const isMobile = useMobile();
  
  return (
    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h3 className="font-medium text-hijau-blue text-sm sm:text-base">
          {format(currentMonth, "MMMM yyyy")}
        </h3>
        <div className="flex space-x-1 sm:space-x-2">
          <Button
            onClick={() => onMonthChange(addWeeks(currentMonth, -1))}
            variant="outline"
            className="h-6 w-6 sm:h-8 sm:w-8 p-0"
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button
            onClick={() => onMonthChange(addWeeks(currentMonth, 1))}
            variant="outline"
            className="h-6 w-6 sm:h-8 sm:w-8 p-0"
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onDateSelect}
        month={currentMonth}
        onMonthChange={onMonthChange}
        className={cn(
          "p-2 sm:p-3 pointer-events-auto rounded-md border", 
          isMobile ? "text-xs sm:text-sm" : ""
        )}
        disabled={[
          { before: new Date() },
          // No days are disabled - allow all days including Sunday
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
  );
};

export default CalendarSelector;
