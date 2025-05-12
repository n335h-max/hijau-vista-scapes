
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BookNowButton = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  
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
          className="fixed bottom-8 right-8 z-40"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Button
            asChild
            className="rounded-full px-5 py-5 md:px-6 md:py-6 bg-hijau-blue hover:bg-hijau-blue/90 shadow-lg hover:shadow-xl text-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-hijau-blue/50 focus:outline-none"
            aria-label="Book a consultation now"
          >
            <Link to="/contact?package=Consultation" className="flex items-center gap-2">
              <Calendar className="size-4 md:size-5" aria-hidden="true" />
              <span className="font-medium hidden md:inline">Book Now</span>
              <span className="font-medium md:hidden">Book</span>
            </Link>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookNowButton;
