
import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  const backgroundImages = [
    "/lovable-uploads/0cc399a2-d2b3-4e16-a313-ee80b82c57e3.png",
    "/lovable-uploads/709c4739-60a7-4fb1-ad9b-01ae2dc9672a.png",
    "/lovable-uploads/ea123fb5-18d1-4a9b-bd54-bd5fb0b2b01c.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-[40vh] md:h-[50vh]">
      {/* Auto-sliding background images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: current === index ? 1 : 0,
            zIndex: current === index ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

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
