
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/09459ed9-aef9-43f6-80f7-fa2c86a42871.png" 
            alt="Hijau Group Logo" 
            className="h-10 w-auto mr-2"
          />
          <span className="font-display text-2xl font-bold text-hijau-dark relative group">
            Hijau{" "}
            <span className="text-hijau-blue relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-hijau-yellow after:transform after:origin-bottom-right after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
              Group
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:transform after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                location.pathname === link.path
                  ? "text-hijau-blue after:bg-hijau-blue after:scale-x-100"
                  : "text-hijau-dark after:bg-hijau-yellow"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild 
            className="bg-hijau-blue hover:bg-hijau-blue/90 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-hijau-dark p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-3 px-4 rounded-md font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-hijau-blue bg-hijau-blue/10"
                    : "text-hijau-dark hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-hijau-blue hover:bg-hijau-blue/90 w-full shadow-md">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
