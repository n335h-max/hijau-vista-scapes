
import React from "react";

interface BookingStatsProps {
  totalBookings: number;
  todayBookings: number;
  bookings?: any[]; // Add to match the props being passed
  loading?: boolean; // Add to match the props being passed
}

const BookingStats: React.FC<BookingStatsProps> = ({ totalBookings, todayBookings }) => {
  return (
    <div className="mt-6 p-4 bg-gradient-to-r from-hijau-blue/10 to-hijau-yellow/10 rounded-lg border border-hijau-blue/20">
      <h3 className="font-medium text-hijau-blue mb-2 text-sm">Booking Stats</h3>
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
  );
};

export default BookingStats;
