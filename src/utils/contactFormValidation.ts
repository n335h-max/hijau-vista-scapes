
import * as z from "zod";

// Form schema validation with enhanced security
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name cannot exceed 100 characters" })
    // Prevent script injection via name field
    .refine(val => !/<script.*?>.*?<\/script>/i.test(val), {
      message: "Name contains invalid characters"
    }),
  
  phone: z.string()
    .min(10, { message: "Please enter a valid phone number" })
    .max(15, { message: "Phone number is too long" })
    .refine(val => /^[0-9+\-\s()]*$/.test(val), {
      message: "Phone number can only contain numbers and basic symbols"
    }),
  
  email: z.string()
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email is too long" })
    .refine(val => !/<[^>]*>/.test(val), {
      message: "Email contains invalid characters"
    }),
  
  address: z.string()
    .min(5, { message: "Address must be at least 5 characters" })
    .max(200, { message: "Address is too long" })
    .refine(val => !/<[^>]*>/.test(val), {
      message: "Address contains invalid characters"
    }),
  
  outsideNegeriSembilan: z.boolean().default(false),
  
  package: z.string({ required_error: "Please select a package" })
    .refine(val => packageOptions.includes(val) || val === '', {
      message: "Please select a valid package"
    }),
  
  message: z.string()
    .max(1000, { message: "Message is too long" })
    .refine(val => !/<script.*?>.*?<\/script>/i.test(val), {
      message: "Message contains invalid characters"
    })
    .optional(),
});

// Package options for the form
export const packageOptions = [
  "Smart Package",
  "Signature Package",
  "Elite Package",
  "Custom Package",
  "Consultation"
];

export type ContactFormValues = z.infer<typeof contactFormSchema>;
