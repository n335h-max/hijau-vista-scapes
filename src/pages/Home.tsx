
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import BookingFlowProcess from "@/components/home/BookingFlowProcess";
import TopClients from "@/components/home/TopClients";
import ContactPreview from "@/components/home/ContactPreview";
import GalleryPreview from "@/components/home/GalleryPreview";

const Home = () => {
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
