
import React, { useMemo } from "react";
import { BarChart, Calendar, Clock, MapPin, Users } from "lucide-react";

interface Booking {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
  address: string;
  outsidenegerisembilan?: boolean;
  payment_completed?: boolean;
}

interface BookingStatsProps {
  totalBookings: number;
  todayBookings: number;
  bookings?: Booking[];
  loading?: boolean;
}

const BookingStats: React.FC<BookingStatsProps> = ({ 
  totalBookings, 
  todayBookings,
  bookings = []
}) => {
  // Calculate additional statistics
  const stats = useMemo(() => {
    // Get pending payments count
    const pendingPayments = bookings.filter(
      booking => booking.outsidenegerisembilan && !booking.payment_completed
    ).length;
    
    // Get unique services count
    const uniqueServices = new Set(bookings.map(booking => booking.service)).size;
    
    // Get outside NS bookings count
    const outsideNSBookings = bookings.filter(
      booking => booking.outsidenegerisembilan
    ).length;
    
    // Get future bookings count (excluding today)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const futureBookings = bookings.filter(booking => {
      const bookingDate = new Date(booking.date);
      bookingDate.setHours(0, 0, 0, 0);
      return bookingDate >= tomorrow;
    }).length;
    
    return {
      pendingPayments,
      uniqueServices,
      outsideNSBookings,
      futureBookings
    };
  }, [bookings]);
  
  return (
    <div className="mt-6 space-y-6">
      <div className="p-4 bg-gradient-to-r from-hijau-blue/10 to-hijau-yellow/10 rounded-lg border border-hijau-blue/20">
        <h3 className="font-medium text-hijau-blue mb-2 text-sm flex items-center">
          <BarChart className="h-4 w-4 mr-1" />
          Booking Stats
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center border-l-4 border-hijau-blue">
            <span className="text-gray-500">Total</span>
            <span className="text-hijau-blue font-bold text-lg">{totalBookings}</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center border-l-4 border-hijau-yellow">
            <span className="text-gray-500">Today</span>
            <span className="text-hijau-blue font-bold text-lg">{todayBookings}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gradient-to-r from-hijau-yellow/10 to-hijau-blue/5 rounded-lg border border-hijau-yellow/20">
        <h3 className="font-medium text-hijau-blue mb-2 text-sm flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          Additional Insights
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center border-l-4 border-amber-400">
            <Clock className="h-4 w-4 text-amber-500 mr-2" />
            <div>
              <span className="text-gray-500 block text-xs">Pending Payment</span>
              <span className="text-hijau-blue font-bold">{stats.pendingPayments}</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center border-l-4 border-green-400">
            <Users className="h-4 w-4 text-green-500 mr-2" />
            <div>
              <span className="text-gray-500 block text-xs">Service Types</span>
              <span className="text-hijau-blue font-bold">{stats.uniqueServices}</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center border-l-4 border-purple-400">
            <MapPin className="h-4 w-4 text-purple-500 mr-2" />
            <div>
              <span className="text-gray-500 block text-xs">Outside NS</span>
              <span className="text-hijau-blue font-bold">{stats.outsideNSBookings}</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center border-l-4 border-blue-400">
            <Calendar className="h-4 w-4 text-blue-500 mr-2" />
            <div>
              <span className="text-gray-500 block text-xs">Future Bookings</span>
              <span className="text-hijau-blue font-bold">{stats.futureBookings}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStats;
