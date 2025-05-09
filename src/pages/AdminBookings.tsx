
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
import AddBookingForm from "@/components/admin/AddBookingForm";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, Trash2, LogOut, Filter, FileText } from "lucide-react";

// Initialize bookings from localStorage or use default mock data
const getInitialBookings = () => {
  const savedBookings = localStorage.getItem("hijauBookings");
  if (savedBookings) {
    // Parse and ensure dates are Date objects
    try {
      const parsed = JSON.parse(savedBookings);
      return parsed.map(booking => ({
        ...booking,
        date: new Date(booking.date)
      }));
    } catch (error) {
      console.error("Error parsing bookings from localStorage:", error);
      return MOCK_BOOKINGS;
    }
  }
  return MOCK_BOOKINGS;
};

// Mock data for bookings - used as fallback if no localStorage data
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
  const [bookings, setBookings] = useState(getInitialBookings());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is admin and load bookings
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
      setIsLoading(false);
    }
  }, [navigate, toast]);

  // Save bookings to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      // Convert Date objects to strings for JSON storage
      const bookingsToSave = bookings.map(booking => ({
        ...booking,
        date: booking.date.toISOString()
      }));
      localStorage.setItem("hijauBookings", JSON.stringify(bookingsToSave));
    }
  }, [bookings, isLoading]);

  const handleAddBooking = (newBooking: any) => {
    setBookings(prev => [...prev, newBooking]);
  };

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

  const handleLogout = () => {
    localStorage.removeItem("isHijauAdmin");
    navigate("/contact");
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
  };

  if (!isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      {/* Admin Header */}
      <section className="relative h-[25vh]">
        <div className="bg-hijau-blue absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>

        <div className="container-custom relative h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="heading-medium mb-2">Admin Booking Management</h1>
            <p className="opacity-90 flex items-center">
              <CalendarClock className="mr-2 h-5 w-5" />
              View and manage all customer appointments
            </p>
          </div>
          <div className="ml-auto">
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-hijau-blue flex items-center gap-2 transition-all"
            >
              <LogOut className="h-4 w-4" />
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
            <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-1 border border-gray-100 hover:shadow-xl transition-all">
              <h2 className="text-lg font-semibold mb-4 text-hijau-blue flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filter by Date
              </h2>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="border rounded-md p-3"
                classNames={{
                  day_selected: "bg-hijau-blue text-white hover:bg-hijau-blue hover:text-white",
                  day_today: "bg-hijau-blue/10 text-hijau-blue",
                }}
              />
              <div className="mt-6 flex justify-center">
                <Button 
                  onClick={() => setSelectedDate(undefined)}
                  variant="outline"
                  size="sm"
                  className="hover:bg-hijau-blue hover:text-white transition-all"
                >
                  Show All Bookings
                </Button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-medium text-hijau-blue mb-2 text-sm">Booking Stats</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
                    <span className="text-gray-500">Total</span>
                    <span className="text-hijau-blue font-bold text-lg">{bookings.length}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
                    <span className="text-gray-500">Today</span>
                    <span className="text-hijau-blue font-bold text-lg">
                      {bookings.filter(b => {
                        const today = new Date();
                        return b.date.getDate() === today.getDate() &&
                               b.date.getMonth() === today.getMonth() &&
                               b.date.getFullYear() === today.getFullYear();
                      }).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2 border border-gray-100 hover:shadow-xl transition-all">
              {/* Add Booking Form */}
              <AddBookingForm onBookingAdded={handleAddBooking} />
              
              <h2 className="text-lg font-semibold mb-4 text-hijau-blue flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                {selectedDate 
                  ? `Bookings for ${format(selectedDate, "MMMM d, yyyy")}`
                  : "All Bookings"
                }
              </h2>
              
              {filteredBookings.length > 0 ? (
                <div className="overflow-x-auto animate-fade-in">
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="font-semibold text-hijau-blue">Client</TableHead>
                        <TableHead className="font-semibold text-hijau-blue">Service</TableHead>
                        <TableHead className="font-semibold text-hijau-blue">Date & Time</TableHead>
                        <TableHead className="font-semibold text-hijau-blue">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredBookings.map((booking) => (
                        <TableRow key={booking.id} className="hover:bg-gray-50/80">
                          <TableCell>
                            <div className="font-medium">{booking.name}</div>
                            <div className="text-sm text-gray-500">{booking.email}</div>
                            <div className="text-sm text-gray-500">{booking.phone}</div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-hijau-blue/5 text-hijau-blue border-hijau-blue/20">
                              {booking.service}
                            </Badge>
                            <div className="text-sm text-gray-500 mt-1 truncate max-w-[200px]">
                              {booking.address}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium text-hijau-blue">
                              {format(booking.date, "MMM d, yyyy")}
                            </div>
                            <div className="text-sm text-gray-500">at {booking.time}</div>
                          </TableCell>
                          <TableCell>
                            <Button
                              onClick={() => handleDeleteBooking(booking.id)}
                              variant="destructive"
                              size="sm"
                              className="flex items-center gap-1"
                            >
                              <Trash2 className="h-4 w-4" />
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500 bg-gray-50/50 rounded-lg border border-gray-200">
                  <CalendarClock className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <p className="font-medium">No bookings found for the selected date</p>
                  <p className="text-sm mt-1">Try selecting a different date or removing the filter</p>
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
