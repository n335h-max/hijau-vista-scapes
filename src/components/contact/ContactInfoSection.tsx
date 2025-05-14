
import React from "react";
import SectionHeading from "./sections/SectionHeading";
import LocationSection from "./sections/LocationSection";
import ContactSection from "./sections/ContactSection";
import EmailSection from "./sections/EmailSection";
import BusinessHoursSection from "./sections/BusinessHoursSection";
import SocialMediaSection from "./sections/SocialMediaSection";
import AdminLoginSection from "./sections/AdminLoginSection";

interface ContactInfoSectionProps {
  onAdminLogin: () => void;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ onAdminLogin }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 transition-all hover:shadow-2xl border border-gray-100 animate-fade-in">
      {/* Section Header */}
      <SectionHeading title="Get In Touch" />
      
      {/* Contact information with simplified card style */}
      <div className="space-y-6 relative">
        {/* Decorative elements */}
        <div className="absolute -z-10 top-1/4 right-0 w-32 h-32 bg-hijau-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-1/4 left-0 w-40 h-40 bg-hijau-yellow/3 rounded-full blur-3xl"></div>
        
        {/* Address Section */}
        <LocationSection />
        
        {/* Phone & WhatsApp Section */}
        <ContactSection />
        
        {/* Email Section */}
        <EmailSection />
        
        {/* Business Hours Section */}
        <BusinessHoursSection />
        
        {/* Social Media Section */}
        <SocialMediaSection />
        
        {/* Admin Login Button */}
        <AdminLoginSection onAdminLogin={onAdminLogin} />
      </div>
    </div>
  );
};

export default ContactInfoSection;
