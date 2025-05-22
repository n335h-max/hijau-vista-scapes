
import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface DateFilterProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({
  selectedDate,
  onSelectDate,
}) => {
  const handleClearFilter = () => {
    onSelectDate(undefined);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal border-hijau-blue/20 hover:bg-hijau-blue/5 hover:text-hijau-blue",
                !selectedDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-hijau-yellow" />
              {selectedDate ? (
                format(selectedDate, "PPP")
              ) : (
                <span>All dates</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate}
              initialFocus
              className="rounded-md border"
            />
          </PopoverContent>
        </Popover>
      </div>

      {selectedDate && (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilter}
            className="text-sm text-hijau-blue hover:text-hijau-blue-dark hover:bg-hijau-blue/5"
          >
            Clear filter
          </Button>
        </div>
      )}

      <div className="p-3 bg-hijau-blue/5 rounded-lg border border-hijau-blue/20 text-sm text-gray-700">
        <p className="mb-2 font-medium text-hijau-blue">Booking Date Filter</p>
        <p>
          Select a date to filter bookings for that specific day, or clear the filter to view all bookings.
        </p>
      </div>
    </div>
  );
};

export default DateFilter;
