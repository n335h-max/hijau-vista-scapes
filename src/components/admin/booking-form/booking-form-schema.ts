
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
  outsideNegeriSembilan: z.boolean().default(false),
  payment_completed: z.boolean().default(false)
});

export type BookingFormData = z.infer<typeof bookingSchema>;

// Available services
export const SERVICES = [
  "Landscape Design & Build",
  "Lawn Maintenance",
  "Hardscaping",
  "Softscaping",
  "Irrigation Systems",
  "Garden Consultation",
];

// Available time slots
export const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", 
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

// Function to check if a date is a Sunday (day index 0)
export const isDateDisabled = (date: Date) => {
  return date.getDay() === 0; // Sunday is disabled
};
