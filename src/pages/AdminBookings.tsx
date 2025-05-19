import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import AdminHeader from "@/components/admin/AdminHeader";
import DateFilter from "@/components/admin/DateFilter";
import BookingsSection from "@/components/admin/BookingsSection";
import BookingStats from "@/components/admin/BookingStats";
import BookingsList from "@/components/admin/BookingsList";
import AddBookingForm from "@/components/admin/booking-form";

interface Booking {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
  address: string;
}

const AdminBookings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
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
      fetchBookings();
    }
  }, [navigate, toast]);

  // Fetch bookings from Supabase
  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('date', { ascending: true });
      
      if (error) {
        throw error;
      }
      
      // Transform data: convert date strings to Date objects
      const transformedData = data.map(booking => ({
        ...booking,
        date: new Date(booking.date)
      }));
      
      setBookings(transformedData);
    } catch (error: any) {
      console.error("Error fetching bookings:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to load bookings",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddBooking = async (newBooking: Booking) => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert({
          name: newBooking.name,
          email: newBooking.email,
          phone: newBooking.phone,
          service: newBooking.service,
          date: newBooking.date.toISOString(),
          time: newBooking.time,
          address: newBooking.address
        })
        .select();
      
      if (error) {
        throw error;
      }
      
      // Add the newly created booking to the state
      const addedBooking = {
        ...data[0],
        date: new Date(data[0].date)
      };
      
      setBookings(prev => [...prev, addedBooking]);
      
      toast({
        title: "Booking Added",
        description: "New booking has been successfully added.",
      });
    } catch (error: any) {
      console.error("Error adding booking:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to add booking",
        variant: "destructive",
      });
    }
  };

  const handleDeleteBooking = async (id: number | string) => {
    try {
      // Convert id to string for Supabase
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', String(id));
      
      if (error) {
        throw error;
      }
      
      // Remove the deleted booking from state
      setBookings(bookings.filter(booking => booking.id !== id));
      
      toast({
        title: "Booking Deleted",
        description: "The booking has been successfully removed.",
      });
    } catch (error: any) {
      console.error("Error deleting booking:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete booking",
        variant: "destructive",
      });
    }
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
              {isLoading ? (
                <div className="text-center py-12">Loading bookings...</div>
              ) : (
                <div>
                  <AddBookingForm onBookingAdded={handleAddBooking} />
                  <BookingsList 
                    bookings={filteredBookings}
                    selectedDate={selectedDate}
                    onDeleteBooking={handleDeleteBooking}
                  />
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
