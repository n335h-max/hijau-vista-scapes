
import React, { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import BookingFlowProcess from "@/components/home/BookingFlowProcess";
import TopClients from "@/components/home/TopClients";
import ContactPreview from "@/components/home/ContactPreview";
import GalleryPreview from "@/components/home/GalleryPreview";

const Home = () => {
  useEffect(() => {
    // Add auto-scrolling for carousels
    const interval = setInterval(() => {
      const carousels = document.querySelectorAll('.embla__container');
      carousels.forEach(carousel => {
        // @ts-ignore
        if (carousel.parentElement.__embla) {
          // @ts-ignore
          carousel.parentElement.__embla.scrollNext();
        }
      });
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <BookingFlowProcess />
      <TopClients />
      <GalleryPreview />
      <ContactPreview />
    </>
  );
};

export default Home;
