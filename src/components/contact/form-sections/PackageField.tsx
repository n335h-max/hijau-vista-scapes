
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
import { Pen } from "lucide-react";

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
          <FormLabel className="flex items-center gap-2 text-hijau-dark font-medium">
            <Pen className="h-4 w-4 text-hijau-blue" />
            Type of Package
          </FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            value={field.value}
          >
            <FormControl>
              <SelectTrigger className="border-gray-200 focus:ring-hijau-blue/20 transition-all rounded-md">
                <SelectValue placeholder="Select a package" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-md">
              {packageOptions.map((packageName) => (
                <SelectItem 
                  key={packageName} 
                  value={packageName}
                  className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                >
                  {packageName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default PackageField;
