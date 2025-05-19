
import React from "react";
import { Control } from "react-hook-form";
import { BookingFormData } from "./booking-form-schema";
import CustomerDetailsFields from "./fields/CustomerDetailsFields";
import BookingDetailsFields from "./fields/BookingDetailsFields";
import AddressField from "./fields/AddressField";
import CheckboxFields from "./fields/CheckboxFields";

interface BookingFormFieldsProps {
  control: Control<BookingFormData>;
}

const BookingFormFields: React.FC<BookingFormFieldsProps> = ({ control }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CustomerDetailsFields control={control} />
      <BookingDetailsFields control={control} />
      <AddressField control={control} />
      <CheckboxFields control={control} />
    </div>
  );
};

export default BookingFormFields;
