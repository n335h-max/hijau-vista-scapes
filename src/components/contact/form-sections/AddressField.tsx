
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
            <div className="space-y-3 leading-none w-full">
              <FormLabel className="text-hijau-blue-dark font-bold text-base block mb-2">
                🟢 Site Visit Coverage Areas:
              </FormLabel>
              <div className="text-hijau-blue-dark/80 text-sm space-y-2">
                <p>Negeri Sembilan, Klang Valley, and Melaka (Masjid Tanah, Ayer Keroh & Simpang Ampat).</p>
                <p>An additional charge of RM300 applies for site visits within the coverage areas stated above.</p>
                <p>Upon confirmation of booking, the RM300 will be refunded as cashback.</p>
              </div>
              
              <div className="pt-2 mt-2 border-t border-hijau-yellow/20">
                <FormLabel className="text-hijau-blue-dark font-bold text-base block mb-2">
                  🟢 Outside Coverage Areas:
                </FormLabel>
                <p className="text-hijau-blue-dark/80 text-sm">
                  A fee of RM1,500 applies for site visits, consultations, and proposal drawings.
                </p>
              </div>
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default AddressField;
