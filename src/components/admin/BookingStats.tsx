
import React, { useMemo } from "react";
import { BarChart, Calendar, Clock, MapPin, Users, DollarSign, CreditCard } from "lucide-react";

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
    
    // Get completed payments count
    const completedPayments = bookings.filter(
      booking => booking.outsidenegerisembilan && booking.payment_completed
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
      completedPayments,
      uniqueServices,
      outsideNSBookings,
      futureBookings
    };
  }, [bookings]);
  
  return (
    <div className="space-y-5">
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-hijau-blue mb-3 text-lg flex items-center">
          <BarChart className="h-5 w-5 mr-2 text-hijau-yellow" />
          Booking Overview
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-hijau-blue to-hijau-blue-light p-4 rounded-lg shadow-sm flex flex-col items-center text-white">
            <span className="text-white/80 text-sm mb-1">Total Bookings</span>
            <span className="text-white font-bold text-2xl">{totalBookings}</span>
          </div>
          <div className="bg-gradient-to-br from-hijau-yellow to-hijau-yellow-light p-4 rounded-lg shadow-sm flex flex-col items-center text-hijau-dark">
            <span className="text-hijau-dark/80 text-sm mb-1">Today</span>
            <span className="text-hijau-dark font-bold text-2xl">{todayBookings}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow">
        <h3 className="font-semibold text-hijau-blue mb-3 text-lg flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-hijau-yellow" />
          Additional Insights
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center border-l-4 border-amber-400 hover:bg-amber-50/30 transition-colors">
            <div className="bg-amber-100 p-2 rounded-full mr-3">
              <CreditCard className="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <span className="text-gray-500 block text-xs">Pending Payment</span>
              <span className="text-hijau-blue font-bold text-lg">{stats.pendingPayments}</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center border-l-4 border-green-400 hover:bg-green-50/30 transition-colors">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <DollarSign className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <span className="text-gray-500 block text-xs">Payments Received</span>
              <span className="text-hijau-blue font-bold text-lg">{stats.completedPayments}</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center border-l-4 border-purple-400 hover:bg-purple-50/30 transition-colors">
            <div className="bg-purple-100 p-2 rounded-full mr-3">
              <MapPin className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <span className="text-gray-500 block text-xs">Outside NS</span>
              <span className="text-hijau-blue font-bold text-lg">{stats.outsideNSBookings}</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center border-l-4 border-blue-400 hover:bg-blue-50/30 transition-colors">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <span className="text-gray-500 block text-xs">Future Bookings</span>
              <span className="text-hijau-blue font-bold text-lg">{stats.futureBookings}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStats;
