
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";
import { contactFormSchema, ContactFormValues } from "@/utils/contactFormValidation";

// Import form section components
import PersonalInfoFields from "./form-sections/PersonalInfoFields";
import AddressField from "./form-sections/AddressField";
import PackageField from "./form-sections/PackageField";
import MessageField from "./form-sections/MessageField";
import SubmitButton from "./form-sections/SubmitButton";

interface ContactFormProps {
  initialService?: string;
  initialMessage?: string | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialService, initialMessage }) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Create form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      package: initialService || "",
      message: initialMessage || "",
    },
  });

  // Effect to update package field when initialService prop changes
  useEffect(() => {
    if (initialService) {
      form.setValue("package", initialService);
    }
    if (initialMessage) {
      form.setValue("message", initialMessage);
    }
  }, [initialService, initialMessage, form]);

  // Form submission handler
  const onSubmit = (values: ContactFormValues) => {
    console.log(values);
    
    // Navigate to the booking page with the form data
    navigate("/booking", { 
      state: { 
        contactDetails: values 
      } 
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 transition-all hover:shadow-2xl border border-gray-100">
      <h2 className="heading-medium text-hijau-blue mb-8 relative inline-block">
        Book a Consultation
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-hijau-yellow rounded-full"></span>
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <PersonalInfoFields control={form.control} />
          <AddressField control={form.control} />
          <PackageField control={form.control} />
          <MessageField control={form.control} />
          <SubmitButton />
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
