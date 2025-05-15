
import React from "react";

const GalleryHero = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh]" aria-label="Gallery header section">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          filter: "saturate(1.2) contrast(1.1)",
        }}
        role="img"
        aria-label="Landscaping project showcase header image"
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
