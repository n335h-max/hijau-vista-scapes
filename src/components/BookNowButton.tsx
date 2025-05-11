
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const BookNowButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Button
        asChild
        className="rounded-full px-6 py-6 bg-hijau-blue hover:bg-hijau-blue/90 shadow-lg hover:shadow-xl text-white transition-all duration-300 hover:scale-105"
      >
        <Link to="/contact?package=Consultation" className="flex items-center gap-2">
          <Calendar className="size-5" />
          <span className="font-medium">Book Now</span>
        </Link>
      </Button>
    </div>
  );
};

export default BookNowButton;
