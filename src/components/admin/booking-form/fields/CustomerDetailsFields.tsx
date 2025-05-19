
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

interface CustomerDetailsFieldsProps {
  control: Control<BookingFormData>;
}

const CustomerDetailsFields: React.FC<CustomerDetailsFieldsProps> = ({ control }) => {
  return (
    <>
      {/* Name Field */}
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Customer Name</FormLabel>
            <FormControl>
              <Input placeholder="John Smith" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Email Field */}
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="customer@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Phone Field */}
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="123-456-7890" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default CustomerDetailsFields;
