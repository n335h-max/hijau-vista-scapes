
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const BookNowButton = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const isMobile = useMobile();
  
  // Track scroll position to show CTA at appropriate time
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {hasScrolled && (
        <motion.div 
          className="fixed bottom-6 right-6 z-40"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="relative">
            {/* Animated glow effect with blue-yellow gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-hijau-blue/30 to-hijau-yellow/30 blur-md animate-pulse-gentle" />
            <Button
              asChild
              className="relative rounded-full px-4 py-4 md:px-6 md:py-6 bg-gradient-to-r from-hijau-blue to-hijau-blue-dark hover:from-hijau-blue-dark hover:to-hijau-blue shadow-lg hover:shadow-xl text-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-hijau-yellow focus:outline-none"
              aria-label="Book a consultation now"
            >
              <Link to="/contact?package=Consultation" className="flex items-center gap-2">
                <Calendar className="size-4 md:size-5" aria-hidden="true" />
                <span className="font-medium hidden md:inline">Book Now</span>
                <span className="font-medium md:hidden inline">Book</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookNowButton;
