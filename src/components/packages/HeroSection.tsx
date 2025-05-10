
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/lovable-uploads/0cc399a2-d2b3-4e16-a313-ee80b82c57e3.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container-custom relative h-full flex items-center">
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
