
import React from "react";
import { Control } from "react-hook-form";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarClock } from "lucide-react";
import { BookingFormData, SERVICES, TIME_SLOTS, isDateDisabled } from "../booking-form-schema";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

interface BookingDetailsFieldsProps {
  control: Control<BookingFormData>;
}

const BookingDetailsFields: React.FC<BookingDetailsFieldsProps> = ({ control }) => {
  return (
    <>
      {/* Service Field */}
      <FormField
        control={control}
        name="service"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Service</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {SERVICES.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Date Field */}
      <FormField
        control={control}
        name="date"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="text-gray-700">Date</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "MMMM d, yyyy")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarClock className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                  disabled={isDateDisabled}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Time Field */}
      <FormField
        control={control}
        name="time"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Time</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {TIME_SLOTS.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default BookingDetailsFields;
