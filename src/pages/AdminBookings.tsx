
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

// Mock data for bookings - in a real app, this would come from a database
const MOCK_BOOKINGS = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "123-456-7890",
    service: "Landscape Design & Build",
    date: new Date(2025, 4, 15),
    time: "09:00",
    address: "123 Main St, City",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "987-654-3210",
    service: "Lawn Maintenance",
    date: new Date(2025, 4, 16),
    time: "14:00",
    address: "456 Oak Ave, Town",
  },
];

const AdminBookings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState(false);
  const [bookings, setBookings] = useState(MOCK_BOOKINGS);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Check if user is admin
  useEffect(() => {
    // In a real app, this would check a session or localStorage token
    const adminStatus = localStorage.getItem("isHijauAdmin");
    if (adminStatus !== "true") {
      toast({
        title: "Access Denied",
        description: "Please log in as an administrator.",
        variant: "destructive",
      });
      navigate("/contact");
    } else {
      setIsAdmin(true);
    }
  }, [navigate, toast]);

  const handleDeleteBooking = (id: number) => {
    // Filter out the deleted booking
    setBookings(bookings.filter(booking => booking.id !== id));
    
    toast({
      title: "Booking Deleted",
      description: "The booking has been successfully removed.",
    });
  };

  // Filter bookings by selected date
  const filteredBookings = selectedDate
    ? bookings.filter(booking => 
        booking.date.getDate() === selectedDate.getDate() &&
        booking.date.getMonth() === selectedDate.getMonth() &&
        booking.date.getFullYear() === selectedDate.getFullYear()
      )
    : bookings;

  if (!isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      {/* Admin Header */}
      <section className="relative h-[20vh]">
        <div className="bg-hijau-blue absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>

        <div className="container-custom relative h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="heading-medium mb-2">Admin Booking Management</h1>
            <p className="opacity-90">
              View and manage all customer appointments
            </p>
          </div>
          <div className="ml-auto">
            <Button 
              onClick={() => {
                localStorage.removeItem("isHijauAdmin");
                navigate("/contact");
              }}
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-hijau-blue"
            >
              Logout
            </Button>
          </div>
        </div>
      </section>

      {/* Admin Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar Filter */}
            <div className="bg-white rounded-xl shadow p-6 lg:col-span-1">
              <h2 className="text-lg font-semibold mb-4 text-hijau-blue">Filter by Date</h2>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="border rounded-md p-3"
              />
              <div className="mt-4 flex justify-center">
                <Button 
                  onClick={() => setSelectedDate(undefined)}
                  variant="outline"
                  size="sm"
                >
                  Show All Bookings
                </Button>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
              <h2 className="text-lg font-semibold mb-4 text-hijau-blue">
                {selectedDate 
                  ? `Bookings for ${format(selectedDate, "MMMM d, yyyy")}`
                  : "All Bookings"
                }
              </h2>
              
              {filteredBookings.length > 0 ? (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell>
                            <div className="font-medium">{booking.name}</div>
                            <div className="text-sm text-gray-500">{booking.phone}</div>
                          </TableCell>
                          <TableCell>{booking.service}</TableCell>
                          <TableCell>
                            {format(booking.date, "MMM d, yyyy")} 
                            <span className="text-gray-500"> at {booking.time}</span>
                          </TableCell>
                          <TableCell>
                            <Button
                              onClick={() => handleDeleteBooking(booking.id)}
                              variant="destructive"
                              size="sm"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No bookings found for the selected date
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminBookings;
