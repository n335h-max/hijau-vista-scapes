
import React from "react";
import { Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormValues } from "@/utils/contactFormValidation";

interface MessageFieldProps {
  control: Control<ContactFormValues>;
}

const MessageField: React.FC<MessageFieldProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Additional Message (Optional)</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us more about your project or requirements"
              className="min-h-[120px] border-gray-300 focus:border-hijau-blue focus:ring-hijau-blue/20"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MessageField;
