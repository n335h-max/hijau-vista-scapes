
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
      <AboutTabs />
      <AboutTestimonials />
      <AboutFAQ />
      <AboutCTA />
    </div>
  );
};

export default About;
