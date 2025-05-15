
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutTabs from "@/components/about/AboutTabs";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutFAQ from "@/components/about/AboutFAQ";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <div className="w-full">
      <AboutHero />
      
      {/* About Hijau Group Image Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/4a379637-28e5-428c-a08d-562157884a51.png" 
                alt="Wooden privacy screens with plants" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="heading-medium text-hijau-blue mb-4">About Hijau Group</h2>
              <p className="mb-6 text-hijau-dark/80">
                With <span className="font-bold text-hijau-blue">over 12 years of experience</span>, Hijau Group Landscape has been transforming 
                residential and commercial properties across Malaysia. Our dedicated team of 
                landscaping professionals combines creativity with technical expertise to deliver 
                exceptional outdoor spaces.
              </p>
              <p className="text-hijau-dark/80">
                We specialize in creating beautiful, functional outdoor environments that enhance the value and enjoyment of your property. 
                From elegant privacy screens to complete garden transformations, our attention to detail and commitment to quality are evident 
                in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <AboutTabs />
      <AboutTestimonials />
      <AboutFAQ />
      <AboutCTA />
    </div>
  );
};

export default About;
