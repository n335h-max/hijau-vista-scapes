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
  savedFormData?: ContactFormValues | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  initialService, 
  initialMessage,
  savedFormData 
}) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Create form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: savedFormData || {
      name: "",
      phone: "",
      email: "",
      address: "",
      outsideNegeriSembilan: false,
      package: initialService || "",
      message: initialMessage || "",
    },
  });

  // Effect to update package field when initialService prop changes
  useEffect(() => {
    if (!savedFormData) {
      if (initialService) {
        form.setValue("package", initialService);
      }
      if (initialMessage) {
        form.setValue("message", initialMessage);
      }
    }
  }, [initialService, initialMessage, form, savedFormData]);

  // Effect for restoring data from canceled payment
  useEffect(() => {
    if (savedFormData) {
      // If we have restored form data, show a message
      toast({
        title: "Form Restored",
        description: "We've restored your form data from your previous attempt.",
      });
    }
  }, [savedFormData, toast]);

  // Form submission handler is now handled in SubmitButton component
  const onSubmit = (values: ContactFormValues) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 transition-all hover:shadow-2xl border border-gray-100 animate-fade-in">
      <div className="relative mb-8">
        <h2 className="heading-medium text-hijau-blue relative inline-block">
          Book a Consultation
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-hijau-yellow rounded-full"></span>
        </h2>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-hijau-blue/5 rounded-full -z-10"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-hijau-yellow/5 rounded-full -z-10"></div>
      </div>

      <div className="mb-6">
        <img
          src="/lovable-uploads/hgl-service-area.jpg"
          alt="Hijau Group Landscape service areas in Negeri Sembilan, Klang Valley and Melaka"
          className="w-full rounded-lg shadow-md border border-gray-200"
        />
      </div>

      {/* Form with enhanced styling */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative">
          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/4 right-0 w-32 h-32 bg-hijau-blue/3 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 bottom-1/4 left-0 w-40 h-40 bg-hijau-yellow/3 rounded-full blur-3xl"></div>
          
          <div className="bg-gradient-to-r from-hijau-blue/5 to-transparent p-6 rounded-lg border border-hijau-blue/10">
            <PersonalInfoFields control={form.control} />
          </div>
          
          <div className="bg-gradient-to-r from-transparent to-hijau-yellow/5 p-6 rounded-lg border border-hijau-yellow/10">
            <AddressField control={form.control} />
          </div>
          
          <div className="bg-gradient-to-r from-hijau-blue/5 to-transparent p-6 rounded-lg border border-hijau-blue/10">
            <PackageField control={form.control} />
          </div>
          
          <div className="bg-gradient-to-r from-transparent to-hijau-yellow/5 p-6 rounded-lg border border-hijau-yellow/10">
            <MessageField control={form.control} />
          </div>
          
          <div className="pt-4">
            <SubmitButton />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
