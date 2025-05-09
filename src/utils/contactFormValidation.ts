
import * as z from "zod";

// Form schema validation
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  package: z.string({ required_error: "Please select a package" }),
  message: z.string().optional(),
});

// Package options for the form
export const packageOptions = [
  "Smart Package",
  "Signature Package",
  "Elite Package",
  "Custom Package"
];

export type ContactFormValues = z.infer<typeof contactFormSchema>;
