
import React from "react";
import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormValues } from "@/utils/contactFormValidation";
import { MapPin } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface AddressFieldProps {
  control: Control<ContactFormValues>;
}

const AddressField: React.FC<AddressFieldProps> = ({ control }) => {
  return (
    <>
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
                placeholder="Your complete address"
                {...field}
                className="border-gray-200 focus:border-hijau-blue focus:ring-hijau-blue/20 transition-all rounded-md"
              />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="outsideNegeriSembilan"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-hijau-yellow/30 rounded-md bg-hijau-yellow/5">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-hijau-yellow data-[state=checked]:border-hijau-yellow"
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-hijau-blue-dark">
                Location is outside of Negeri Sembilan
              </FormLabel>
              <FormDescription className="text-hijau-blue-dark/70 text-sm">
                An additional charge of RM300 will apply. Once the booking is confirmed, the RM300 will be returned by cashback.
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
      
      <div className="mt-4 p-3 bg-hijau-yellow/10 border border-hijau-yellow/30 rounded-lg">
        <p className="text-sm text-hijau-blue-dark font-medium">
          A fee of RM1,500 applies for site visit, consultation, and proposal drawings.
        </p>
      </div>
    </>
  );
};

export default AddressField;
