
import React, { useState } from "react";
import { addDays, format, isSameDay, isWithinInterval } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Filter, CalendarRange, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface DateFilterProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

type DateRangeType = "today" | "tomorrow" | "thisWeek" | "nextWeek" | "custom";

const DateFilter: React.FC<DateFilterProps> = ({ selectedDate, onSelectDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dateRangeType, setDateRangeType] = useState<DateRangeType>("today");
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | undefined>(undefined);

  const handleRangeSelect = (type: DateRangeType) => {
    setDateRangeType(type);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let from: Date;
    let to: Date;
    
    switch (type) {
      case "today":
        onSelectDate(today);
        setDateRange(undefined);
        break;
      case "tomorrow":
        const tomorrow = addDays(today, 1);
        onSelectDate(tomorrow);
        setDateRange(undefined);
        break;
      case "thisWeek":
        from = today;
        to = addDays(today, 6);
        setDateRange({ from, to });
        onSelectDate(undefined); // Clear single date selection
        break;
      case "nextWeek":
        from = addDays(today, 7);
        to = addDays(today, 13);
        setDateRange({ from, to });
        onSelectDate(undefined); // Clear single date selection
        break;
      case "custom":
        // Do nothing, wait for user to select dates
        break;
      default:
        break;
    }
  };

  const clearFilters = () => {
    onSelectDate(undefined);
    setDateRange(undefined);
    setDateRangeType("today");
  };

  // Format date range for display
  const formatDateRange = () => {
    if (selectedDate) {
      return format(selectedDate, "MMM d, yyyy");
    } else if (dateRange?.from && dateRange?.to) {
      return `${format(dateRange.from, "MMM d")} - ${format(dateRange.to, "MMM d, yyyy")}`;
    }
    return "All dates";
  };

  // Check if a booking's date falls within the selected date range
  const isDateInRange = (date: Date) => {
    if (dateRange?.from && dateRange?.to) {
      return isWithinInterval(date, { start: dateRange.from, end: dateRange.to });
    }
    return false;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-1 border border-hijau-blue/10 hover:shadow-xl transition-all">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-hijau-blue flex items-center">
          <Filter className="mr-2 h-5 w-5" />
          Filter by Date
        </h2>
        
        {(selectedDate || dateRange) && (
          <Button
            onClick={clearFilters}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4 mr-1" /> Clear
          </Button>
        )}
      </div>
      
      <div className="space-y-4">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full justify-between border-hijau-blue/20 text-hijau-blue"
            >
              <span className="flex items-center">
                <CalendarRange className="mr-2 h-5 w-5" />
                {formatDateRange()}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Tabs defaultValue="quick" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="quick">Quick Select</TabsTrigger>
                <TabsTrigger value="custom">Calendar</TabsTrigger>
              </TabsList>
              
              <TabsContent value="quick" className="p-4 space-y-4">
                <div className="space-y-2">
                  <Button
                    variant={dateRangeType === "today" ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => handleRangeSelect("today")}
                  >
                    Today
                  </Button>
                  <Button
                    variant={dateRangeType === "tomorrow" ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => handleRangeSelect("tomorrow")}
                  >
                    Tomorrow
                  </Button>
                  <Button
                    variant={dateRangeType === "thisWeek" ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => handleRangeSelect("thisWeek")}
                  >
                    This Week
                  </Button>
                  <Button
                    variant={dateRangeType === "nextWeek" ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => handleRangeSelect("nextWeek")}
                  >
                    Next Week
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="custom" className="p-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    onSelectDate(date);
                    setDateRange(undefined);
                    setIsOpen(false);
                  }}
                  className="border-hijau-blue/10 rounded-md"
                  classNames={{
                    day_selected: "bg-hijau-blue text-white hover:bg-hijau-blue hover:text-white",
                    day_today: "bg-hijau-yellow/20 text-hijau-dark font-bold",
                    day_range_middle: "bg-hijau-blue/10",
                  }}
                />
              </TabsContent>
            </Tabs>
          </PopoverContent>
        </Popover>
        
        <div className="pt-2 border-t border-gray-100">
          <Select
            value={dateRangeType}
            onValueChange={(value) => handleRangeSelect(value as DateRangeType)}
          >
            <SelectTrigger className="border-hijau-blue/20">
              <SelectValue placeholder="Select filter type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="thisWeek">This Week</SelectItem>
              <SelectItem value="nextWeek">Next Week</SelectItem>
              <SelectItem value="custom">Custom Date</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default DateFilter;
