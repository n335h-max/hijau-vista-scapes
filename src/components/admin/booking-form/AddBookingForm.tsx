
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Plus } from "lucide-react";
import { bookingSchema, type BookingFormData } from "./booking-form-schema";
import BookingFormFields from "./BookingFormFields";
import BookingFormHeader from "./BookingFormHeader";
import type { Booking } from "./booking-types";

interface AddBookingFormProps {
  onBookingAdded: (booking: Booking) => void;
}

const AddBookingForm: React.FC<AddBookingFormProps> = ({ onBookingAdded }) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      address: "",
      time: "",
      outsidenegerisembilan: false,
      payment_completed: false
    },
  });

  const onSubmit = (data: BookingFormData) => {
    // Create a new booking object
    const newBooking: Booking = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      date: data.date,
      time: data.time,
      address: data.address,
      outsidenegerisembilan: data.outsidenegerisembilan,
      payment_completed: data.payment_completed
    };

    // Pass the new booking up to the parent component
    onBookingAdded(newBooking);

    // Reset the form
    form.reset();
    
    // Close the form
    setIsOpen(false);

    // Show success toast
    toast({
      title: "Booking Added",
      description: `Booking for ${data.name} has been added.`,
    });
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full bg-hijau-blue hover:bg-hijau-blue/90 shadow-button hover:shadow-lg transition-all"
      >
        <Plus className="mr-2 h-5 w-5" />
        Add New Booking
      </Button>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 animate-fade-in">
      <BookingFormHeader setIsOpen={setIsOpen} />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <BookingFormFields control={form.control} />
          
          <Button 
            type="submit" 
            className="w-full bg-hijau-blue hover:bg-hijau-blue/90 mt-4 shadow-button hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add Booking
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddBookingForm;
