
import React from "react";

const GalleryHero = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh] bg-white/5 backdrop-blur-sm" aria-label="Gallery header section">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/lovable-uploads/d3b22c60-79f0-42ae-8108-5459310ebab9.png')",
          filter: "saturate(1.2) contrast(1.1)",
        }}
        role="img"
        aria-label="Water feature with lily pads and tropical plants in a garden setting"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hijau-blue/80 to-black/50"></div>
      </div>

      <div className="container-custom relative h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="heading-large mb-4 font-bold relative">
            Our <span className="text-hijau-yellow drop-shadow-md">Gallery</span>
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-hijau-yellow rounded-full"></div>
          </h1>
          <p className="text-lg md:text-xl shadow-text">
            Explore our portfolio of completed projects and get inspired for your own landscape transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
