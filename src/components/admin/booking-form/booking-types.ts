
export interface Booking {
  id?: number | string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date | string;
  time: string;
  address: string;
  outsidenegerisembilan?: boolean; // Properly matching the database column name
  payment_completed?: boolean;
}
