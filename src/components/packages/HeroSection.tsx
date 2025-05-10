
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556061078-0c6067c677d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container-custom relative h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="heading-large mb-4">Landscape Packages</h1>
          <p className="text-lg md:text-xl">
            We offer a range of curated packages to transform your outdoor spaces,
            from simple enhancements to luxurious complete landscapes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
