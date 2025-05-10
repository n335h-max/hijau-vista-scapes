
import React from "react";
import { format, addWeeks, isToday, isSameDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-hijau-blue">
          {format(currentMonth, "MMMM yyyy")}
        </h3>
        <div className="flex space-x-2">
          <Button
            onClick={() => onMonthChange(addWeeks(currentMonth, -1))}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => onMonthChange(addWeeks(currentMonth, 1))}
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
        onSelect={onDateSelect}
        month={currentMonth}
        onMonthChange={onMonthChange}
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
  );
};

export default CalendarSelector;
