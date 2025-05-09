
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AdminHeader from "@/components/admin/AdminHeader";
import DateFilter from "@/components/admin/DateFilter";
import BookingsSection from "@/components/admin/BookingsSection";
import BookingStats from "@/components/admin/BookingStats";

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

  // Calculate today's bookings for stats
  const todayBookings = bookings.filter(b => {
    const today = new Date();
    return b.date.getDate() === today.getDate() &&
           b.date.getMonth() === today.getMonth() &&
           b.date.getFullYear() === today.getFullYear();
  }).length;

  if (!isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <AdminHeader 
        title="Admin Booking Management"
        description="View and manage all customer appointments"
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: Calendar Filter and Stats */}
            <div>
              <DateFilter 
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
              <BookingStats 
                totalBookings={bookings.length}
                todayBookings={todayBookings}
              />
            </div>

            {/* Right column: Bookings Table */}
            <div className="lg:col-span-2">
              <BookingsSection 
                bookings={filteredBookings}
                selectedDate={selectedDate}
                onBookingAdded={handleAddBooking}
                onDeleteBooking={handleDeleteBooking}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminBookings;
