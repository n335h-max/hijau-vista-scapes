
import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh]">
      {/* Static background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/493b3112-a542-4f5e-b4ca-410d37c8e13e.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container-custom relative h-full flex items-center z-10">
        <div className="max-w-xl text-white">
          <h1 className="heading-large mb-4">Landscape Packages</h1>
          <p className="text-lg md:text-xl">
            We offer a range of curated packages to transform your outdoor spaces,
            from simple enhancements to luxurious complete landscapes with both hardscape and softscape elements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
