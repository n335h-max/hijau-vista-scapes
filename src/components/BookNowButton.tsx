
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BookNowButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Button
        asChild
        className="rounded-full px-6 py-6 bg-hijau-blue hover:bg-hijau-blue/90 shadow-lg hover:shadow-xl text-white"
      >
        <Link to="/contact">Book Now</Link>
      </Button>
    </div>
  );
};

export default BookNowButton;
