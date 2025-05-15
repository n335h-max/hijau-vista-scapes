
import React from "react";

const BookingHero = () => {
  return (
    <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1631892896784-cec78594f266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container-custom relative h-full flex items-center px-4 sm:px-6">
        <div className="max-w-xl text-white">
          <h1 className="heading-large mb-3 sm:mb-4 relative text-2xl sm:text-3xl md:text-4xl">
            Book Your Consultation
            <span className="absolute -bottom-2 sm:-bottom-4 left-0 w-16 sm:w-24 h-1 bg-hijau-yellow"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 opacity-90">
            Schedule your landscaping consultation to begin the journey
            to your perfect outdoor space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingHero;
