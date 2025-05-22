
import React from "react";
import { format } from "date-fns";
import { FileText, CalendarClock, Trash2 } from "lucide-react";
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
}

interface BookingsListProps {
  bookings: Booking[];
  selectedDate?: Date;
  onDeleteBooking: (id: number | string) => void;
  loading?: boolean; // Add to match the props being passed
}

const BookingsList: React.FC<BookingsListProps> = ({ 
  bookings, 
  selectedDate, 
  onDeleteBooking, 
  loading 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2 border border-gray-100 hover:shadow-xl transition-all">      
      <h2 className="text-lg font-semibold mb-4 text-hijau-blue flex items-center">
        <FileText className="mr-2 h-5 w-5" />
        {selectedDate 
          ? `Bookings for ${format(selectedDate, "MMMM d, yyyy")}`
          : "All Bookings"
        }
      </h2>
      
      {bookings.length > 0 ? (
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
              {bookings.map((booking) => (
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
                    <Button
                      onClick={() => onDeleteBooking(booking.id)}
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
  );
};

export default BookingsList;
