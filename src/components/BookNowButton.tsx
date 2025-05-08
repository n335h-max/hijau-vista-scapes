
import React from "react";
import { Link } from "react-router-dom";

const BookNowButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Link
        to="/contact"
        className="btn-book-now flex items-center justify-center text-base font-medium shadow-lg hover:shadow-xl"
      >
        Book Now
      </Link>
    </div>
  );
};

export default BookNowButton;
