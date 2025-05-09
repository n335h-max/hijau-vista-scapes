
import React from "react";
import { Control } from "react-hook-form";
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
import { packageOptions, ContactFormValues } from "@/utils/contactFormValidation";

interface PackageFieldProps {
  control: Control<ContactFormValues>;
}

const PackageField: React.FC<PackageFieldProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="package"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Type of Package</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            value={field.value}
          >
            <FormControl>
              <SelectTrigger className="border-gray-300 focus:ring-hijau-blue/20">
                <SelectValue placeholder="Select a package" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {packageOptions.map((packageName) => (
                <SelectItem key={packageName} value={packageName}>
                  {packageName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PackageField;
