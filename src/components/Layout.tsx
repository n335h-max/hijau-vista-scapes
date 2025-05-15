
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import BookNowButton from "./BookNowButton";
import { Toaster } from "@/components/ui/toaster";
import { Smartphone } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [showMobileIndicator, setShowMobileIndicator] = useState(false);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsPageLoaded(false);
    
    // Simulate page load for better UX
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Check for UTM parameters for redirection
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    
    // Show mobile indicator for 3 seconds when mobile detected
    if (window.innerWidth < 768) {
      setShowMobileIndicator(true);
      const timer = setTimeout(() => {
        setShowMobileIndicator(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
    
    // Redirect if the source is Facebook, TikTok or WhatsApp
    if (utmSource && ['facebook', 'tiktok', 'whatsapp'].includes(utmSource.toLowerCase())) {
      // Only redirect if not already on the services page
      if (location.pathname !== '/services') {
        window.location.href = '/services';
      }
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-hijau-blue/5">
      <Navigation />
      <main className="flex-grow w-full pt-16 md:pt-20">
        <div
          style={{ opacity: isPageLoaded ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
          className="h-full w-full"
        >
          {children}
        </div>
      </main>
      <BookNowButton />
      <Footer />
      <Toaster />
      
      {/* Mobile optimization indicator */}
      {showMobileIndicator && (
        <div 
          className="fixed bottom-20 left-4 z-40 bg-hijau-blue text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-xs animate-fade-in"
          role="status"
          aria-live="polite"
        >
          <Smartphone className="h-4 w-4" />
          <span>Mobile optimized</span>
        </div>
      )}
      
      {/* Skip to content link for accessibility */}
      <a 
        href="#packages-list" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 bg-hijau-blue text-white px-4 py-2 rounded-lg z-50 focus:outline-none"
      >
        Skip to packages
      </a>
    </div>
  );
};

export default Layout;
