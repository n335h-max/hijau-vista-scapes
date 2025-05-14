
import React from "react";
import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormValues } from "@/utils/contactFormValidation";
import { User, Mail, Phone } from "lucide-react";

interface PersonalInfoFieldsProps {
  control: Control<ContactFormValues>;
}

const PersonalInfoFields: React.FC<PersonalInfoFieldsProps> = ({
  control
}) => {
  return <>
      <FormField control={control} name="name" render={({
      field
    }) => <FormItem>
            <FormLabel className="flex items-center gap-2 text-hijau-dark font-medium">
              <User className="h-4 w-4 text-hijau-blue" />
              Full Name
            </FormLabel>
            <FormControl>
              <Input placeholder="Your name" {...field} className="border-gray-200 focus:border-hijau-blue focus:ring-hijau-blue/20 transition-all rounded-md" />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField control={control} name="phone" render={({
        field
      }) => <FormItem className="">
              <FormLabel className="flex items-center gap-2 text-hijau-dark font-medium">
                <Phone className="h-4 w-4 text-hijau-blue" />
                Phone Number
              </FormLabel>
              <FormControl>
                <Input placeholder="Your phone number" {...field} className="border-gray-200 focus:border-hijau-blue focus:ring-hijau-blue/20 transition-all rounded-md" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>} />

        <FormField control={control} name="email" render={({
        field
      }) => <FormItem className="">
              <FormLabel className="flex items-center gap-2 text-hijau-dark font-medium">
                <Mail className="h-4 w-4 text-hijau-blue" />
                Email Address
              </FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} className="border-gray-200 focus:border-hijau-blue focus:ring-hijau-blue/20 transition-all rounded-md" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>} />
      </div>
    </>;
};

export default PersonalInfoFields;
