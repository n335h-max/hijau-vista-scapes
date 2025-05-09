
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface DateFilterProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ selectedDate, onSelectDate }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-1 border border-gray-100 hover:shadow-xl transition-all">
      <h2 className="text-lg font-semibold mb-4 text-hijau-blue flex items-center">
        <Filter className="mr-2 h-5 w-5" />
        Filter by Date
      </h2>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onSelectDate}
        className="border rounded-md p-3"
        classNames={{
          day_selected: "bg-hijau-blue text-white hover:bg-hijau-blue hover:text-white",
          day_today: "bg-hijau-blue/10 text-hijau-blue",
        }}
      />
      <div className="mt-6 flex justify-center">
        <Button 
          onClick={() => onSelectDate(undefined)}
          variant="outline"
          size="sm"
          className="hover:bg-hijau-blue hover:text-white transition-all"
        >
          Show All Bookings
        </Button>
      </div>
    </div>
  );
};

export default DateFilter;
