
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Form schema validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  service: z.string({ required_error: "Please select a service" }),
  message: z.string().optional(),
});

interface ContactFormProps {
  initialService?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialService }) => {
  const { toast } = useToast();

  // Create form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      service: initialService || "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // In a real application, you would send this data to your backend
    
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you shortly to confirm your appointment details and preferred date.",
    });
    
    form.reset();
  };

  // Service options
  const serviceOptions = [
    "Landscape Design & Build",
    "Consultation",
    "Landscape 3D & CAD Drawing",
    "Landscape Ideas (Hardscape & Softscape)",
    "Construction",
    "Natural & Artificial Grass Installation",
    "Water Feature",
    "Tiny House / Playhouse",
    "Lawn Maintenance",
    "Nursery",
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 transition-all hover:shadow-2xl border border-gray-100">
      <h2 className="heading-medium text-hijau-blue mb-8 relative inline-block">
        Book a Consultation
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-hijau-yellow rounded-full"></span>
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    {...field} 
                    className="border-gray-300 focus:border-hijau-blue focus:ring-hijau-blue/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your phone number" 
                      {...field} 
                      className="border-gray-300 focus:border-hijau-blue focus:ring-hijau-blue/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your email" 
                      {...field} 
                      className="border-gray-300 focus:border-hijau-blue focus:ring-hijau-blue/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your address" 
                    {...field} 
                    className="border-gray-300 focus:border-hijau-blue focus:ring-hijau-blue/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Service</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-gray-300 focus:ring-hijau-blue/20">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {serviceOptions.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
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

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-hijau-blue hover:bg-hijau-blue/90 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              size="lg"
            >
              Submit Booking Request
            </Button>
            <p className="text-gray-500 text-sm text-center mt-3">
              After submission, we'll contact you to schedule your preferred date and time.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
