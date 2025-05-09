
import React from "react";
import { Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormValues } from "@/utils/contactFormValidation";

interface AddressFieldProps {
  control: Control<ContactFormValues>;
}

const AddressField: React.FC<AddressFieldProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="address"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Address</FormLabel>
          <FormControl>
            <Input 
              placeholder="Your address" 
              {...field} 
              className="border-gray-300 focus:border-hijau-blue focus:ring-hijau-blue/20"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AddressField;
