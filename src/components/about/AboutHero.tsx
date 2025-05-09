
import React from "react";

const AboutHero = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container-custom relative h-full flex items-center">
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
