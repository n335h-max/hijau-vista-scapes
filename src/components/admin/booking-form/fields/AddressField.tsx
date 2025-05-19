
import React from "react";
import { Control } from "react-hook-form";
import { BookingFormData } from "../booking-form-schema";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface AddressFieldProps {
  control: Control<BookingFormData>;
}

const AddressField: React.FC<AddressFieldProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="address"
      render={({ field }) => (
        <FormItem className="md:col-span-2">
          <FormLabel className="text-gray-700">Service Address</FormLabel>
          <FormControl>
            <Input placeholder="123 Main St, City" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AddressField;
