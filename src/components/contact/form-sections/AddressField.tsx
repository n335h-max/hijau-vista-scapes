
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
import { MapPin } from "lucide-react";

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
          <FormLabel className="flex items-center gap-2 text-hijau-dark font-medium">
            <MapPin className="h-4 w-4 text-hijau-blue" />
            Address
          </FormLabel>
          <FormControl>
            <Input 
              placeholder="Your address" 
              {...field} 
              className="border-gray-200 focus:border-hijau-blue focus:ring-hijau-blue/20 transition-all rounded-md"
            />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default AddressField;
