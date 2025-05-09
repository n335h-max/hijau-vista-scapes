
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
import { MessageSquare } from "lucide-react";

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
          <FormLabel className="flex items-center gap-2 text-hijau-dark font-medium">
            <MessageSquare className="h-4 w-4 text-hijau-blue" />
            Additional Message (Optional)
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us more about your project or requirements"
              className="min-h-[120px] border-gray-200 focus:border-hijau-blue focus:ring-hijau-blue/20 transition-all resize-none rounded-md"
              {...field}
            />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default MessageField;
