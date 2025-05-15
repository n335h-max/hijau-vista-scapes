
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-hijau-blue shadow-lg py-2"
          : "bg-hijau-blue py-3 md:py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/09459ed9-aef9-43f6-80f7-fa2c86a42871.png" 
            alt="Hijau Group Logo" 
            className="h-8 md:h-10 w-auto mr-2 drop-shadow-md"
          />
          <span className="font-display text-xl md:text-2xl font-bold text-hijau-yellow relative group">
            Hijau{" "}
            <span className="text-hijau-yellow relative inline-block drop-shadow-sm">
              Group Landscape
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium ${
                location.pathname === link.path
                  ? "text-hijau-yellow"
                  : "text-white hover:text-hijau-yellow"
              } transition-colors duration-200`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild 
            className="bg-hijau-yellow text-hijau-blue hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 font-bold"
            size={isMobile ? "sm" : "default"}
          >
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-full bg-hijau-yellow/20 hover:bg-hijau-yellow/30 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-hijau-blue shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-3 px-4 rounded-md font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-hijau-yellow bg-white/10"
                    : "text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-hijau-yellow text-hijau-blue hover:bg-white hover:text-hijau-blue w-full shadow-md mt-2 font-bold rounded-full">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
