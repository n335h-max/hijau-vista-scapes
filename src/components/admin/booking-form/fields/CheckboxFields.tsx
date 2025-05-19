
import React from "react";
import { Control } from "react-hook-form";
import { BookingFormData } from "../booking-form-schema";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxFieldsProps {
  control: Control<BookingFormData>;
}

const CheckboxFields: React.FC<CheckboxFieldsProps> = ({ control }) => {
  return (
    <>
      {/* Outside Negeri Sembilan Checkbox */}
      <FormField
        control={control}
        name="outsideNegeriSembilan"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
            <FormControl>
              <Checkbox 
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-gray-700">Outside Negeri Sembilan</FormLabel>
              <FormDescription className="text-xs text-muted-foreground">
                Location requires additional RM300 fee
              </FormDescription>
            </div>
          </FormItem>
        )}
      />

      {/* Payment Completed Checkbox */}
      <FormField
        control={control}
        name="payment_completed"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
            <FormControl>
              <Checkbox 
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-gray-700">Payment Completed</FormLabel>
              <FormDescription className="text-xs text-muted-foreground">
                Mark if outside location fee has been paid
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default CheckboxFields;
