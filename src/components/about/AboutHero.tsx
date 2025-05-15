
import React, { useState, useEffect } from "react";

const AboutHero = () => {
  const [current, setCurrent] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "/lovable-uploads/3f82aae2-c144-4b5e-b996-e4b2170e0b2a.png",
    "/lovable-uploads/0c0689f1-ffa9-418e-a8d5-79ec0c75aa13.png"
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      <div className="container-custom relative h-full flex items-center z-10">
        <div className="max-w-xl text-white">
          <div className="flex items-center mb-6">
            <img 
              src="/lovable-uploads/09459ed9-aef9-43f6-80f7-fa2c86a42871.png" 
              alt="Hijau Group Logo" 
              className="h-16 w-auto mr-4"
            />
            <h1 className="heading-large">About Hijau Group</h1>
          </div>
          <p className="text-lg md:text-xl">
            Get to know our story, mission, vision, and the team behind Hijau Group Landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
