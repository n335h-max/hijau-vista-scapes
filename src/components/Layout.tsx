
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import BookNowButton from "./BookNowButton";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Check for UTM parameters for redirection
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    
    // Redirect if the source is Facebook, TikTok or WhatsApp
    if (utmSource && ['facebook', 'tiktok', 'whatsapp'].includes(utmSource.toLowerCase())) {
      // Only redirect if not already on the services page
      if (location.pathname !== '/services') {
        window.location.href = '/services';
      }
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <BookNowButton />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
