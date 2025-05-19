
export interface Booking {
  id?: number | string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
  address: string;
  outsideNegeriSembilan?: boolean;
  payment_completed?: boolean;
}
