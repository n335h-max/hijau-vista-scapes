
import * as z from "zod";

// Schema for form validation
export const bookingSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  service: z.string({ required_error: "Please select a service" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  outsidenegerisembilan: z.boolean().default(false),
  payment_completed: z.boolean().default(false)
});

export type BookingFormData = z.infer<typeof bookingSchema>;

// Available services
export const SERVICES = [
  "Smart Package",
  "Signature Package", 
  "Elite Package",
  "Custom Package",
  "Landscape Design & Build",
  "Lawn Maintenance",
  "Hardscaping",
  "Softscaping",
  "Irrigation Systems",
  "Garden Consultation",
];

// Available time slots
export const TIME_SLOTS = [
  "10:00",
  "15:00"
];

// Function to check if a date is disabled - only Wednesday and Friday are allowed
export const isDateDisabled = (date: Date) => {
  const day = date.getDay();
  // 3 is Wednesday, 5 is Friday
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today || (day !== 3 && day !== 5);
};
