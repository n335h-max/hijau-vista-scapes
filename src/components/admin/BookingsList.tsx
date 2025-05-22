
import React, { useState } from "react";
import { format } from "date-fns";
import { FileText, CalendarClock, Trash2, Eye, Check, XCircle, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { truncateText } from "@/lib/utils";

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

interface BookingsListProps {
  bookings: Booking[];
  selectedDate?: Date;
  onDeleteBooking: (id: number | string) => void;
  loading?: boolean;
}

const BookingsList: React.FC<BookingsListProps> = ({ 
  bookings, 
  selectedDate, 
  onDeleteBooking, 
  loading 
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter bookings based on search term
  const filteredBookings = searchTerm 
    ? bookings.filter(booking => 
        booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.address.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : bookings;

  // Get booking status
  const getBookingStatus = (booking: Booking) => {
    const bookingDate = new Date(
      booking.date.getFullYear(),
      booking.date.getMonth(),
      booking.date.getDate()
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // If the booking has payment required but not completed
    if (booking.outsidenegerisembilan && !booking.payment_completed) {
      return {
        label: "Payment Due",
        variant: "outline" as const,
        color: "text-amber-600 border-amber-300 bg-amber-50",
        icon: <AlertCircle className="h-3.5 w-3.5 mr-1" />
      };
    }
    
    // If the booking date is in the past
    if (bookingDate < today) {
      return {
        label: "Completed",
        variant: "outline" as const,
        color: "text-green-600 border-green-300 bg-green-50",
        icon: <Check className="h-3.5 w-3.5 mr-1" />
      };
    }
    
    // If the booking is today
    if (bookingDate.getTime() === today.getTime()) {
      return {
        label: "Today",
        variant: "outline" as const,
        color: "text-blue-600 border-blue-300 bg-blue-50",
        icon: <CalendarClock className="h-3.5 w-3.5 mr-1" />
      };
    }
    
    // If the booking is in the future
    return {
      label: "Upcoming",
      variant: "outline" as const,
      color: "text-slate-600 border-slate-300 bg-slate-50",
      icon: <CalendarClock className="h-3.5 w-3.5 mr-1" />
    };
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2 border border-gray-100 hover:shadow-xl transition-all">      
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-hijau-blue flex items-center">
          <FileText className="mr-2 h-5 w-5" />
          {selectedDate 
            ? `Bookings for ${format(selectedDate, "MMMM d, yyyy")}`
            : "All Bookings"
          }
        </h2>
        
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="py-2 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-hijau-blue/30 focus:border-hijau-blue transition-colors"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <XCircle className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      
      {filteredBookings.length > 0 ? (
        <div className="overflow-x-auto animate-fade-in">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="font-semibold text-hijau-blue">Client</TableHead>
                <TableHead className="font-semibold text-hijau-blue">Service</TableHead>
                <TableHead className="font-semibold text-hijau-blue">Date & Time</TableHead>
                <TableHead className="font-semibold text-hijau-blue">Status</TableHead>
                <TableHead className="font-semibold text-hijau-blue">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => {
                const status = getBookingStatus(booking);
                
                return (
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
                      <div className="text-sm text-gray-500 mt-1">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="cursor-help">
                                {truncateText(booking.address, 40)}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-[350px] break-words bg-white p-2 text-sm shadow-lg">
                              {booking.address}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-hijau-blue">
                        {format(booking.date, "MMM d, yyyy")}
                      </div>
                      <div className="text-sm text-gray-500">at {booking.time}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={status.variant} className={status.color}>
                        <span className="flex items-center">
                          {status.icon}
                          {status.label}
                        </span>
                      </Badge>
                      {booking.outsidenegerisembilan && (
                        <div className="mt-1">
                          <Badge variant="outline" className="text-gray-600 border-gray-300 bg-gray-50 text-xs">
                            Outside NS
                          </Badge>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Booking Details</DialogTitle>
                              <DialogDescription>
                                Full details for booking #{booking.id.toString().substring(0, 8)}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-3 gap-4">
                                <div>
                                  <h3 className="font-medium text-sm text-gray-500">Client</h3>
                                  <p className="mt-1">{booking.name}</p>
                                </div>
                                <div>
                                  <h3 className="font-medium text-sm text-gray-500">Email</h3>
                                  <p className="mt-1">{booking.email}</p>
                                </div>
                                <div>
                                  <h3 className="font-medium text-sm text-gray-500">Phone</h3>
                                  <p className="mt-1">{booking.phone}</p>
                                </div>
                              </div>
                              <div>
                                <h3 className="font-medium text-sm text-gray-500">Service</h3>
                                <p className="mt-1">{booking.service}</p>
                              </div>
                              <div>
                                <h3 className="font-medium text-sm text-gray-500">Address</h3>
                                <p className="mt-1">{booking.address}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h3 className="font-medium text-sm text-gray-500">Date</h3>
                                  <p className="mt-1">{format(booking.date, "MMMM d, yyyy")}</p>
                                </div>
                                <div>
                                  <h3 className="font-medium text-sm text-gray-500">Time</h3>
                                  <p className="mt-1">{booking.time}</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h3 className="font-medium text-sm text-gray-500">Outside Negeri Sembilan</h3>
                                  <p className="mt-1">{booking.outsidenegerisembilan ? "Yes" : "No"}</p>
                                </div>
                                <div>
                                  <h3 className="font-medium text-sm text-gray-500">Payment Completed</h3>
                                  <p className="mt-1">{booking.payment_completed ? "Yes" : "No"}</p>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button
                          onClick={() => onDeleteBooking(booking.id)}
                          variant="destructive"
                          size="sm"
                          className="flex items-center gap-1"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 bg-gray-50/50 rounded-lg border border-gray-200">
          <CalendarClock className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <p className="font-medium">No bookings found</p>
          <p className="text-sm mt-1">Try adjusting your search or date filter</p>
        </div>
      )}
    </div>
  );
};

export default BookingsList;
