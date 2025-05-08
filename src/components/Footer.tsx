
import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-hijau-dark to-hijau-dark/95 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h3 className="font-display text-3xl font-bold mb-2">
                Hijau <span className="text-hijau-yellow">Group</span>
              </h3>
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-hijau-blue rounded-full"></div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional landscaping services to transform your outdoor spaces into breathtaking environments.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-hijau-blue p-3 rounded-full transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-hijau-blue p-3 rounded-full transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-hijau-blue p-3 rounded-full transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-hijau-blue p-3 rounded-full transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h4 className="font-bold text-xl mb-2">Quick Links</h4>
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-hijau-yellow rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-hijau-yellow flex items-center transition-all duration-200 hover:translate-x-1"
                  >
                    <span className="text-hijau-yellow mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h4 className="font-bold text-xl mb-2">Our Services</h4>
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-hijau-yellow rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {[
                "Landscape Design",
                "Construction",
                "Maintenance",
                "Consultation",
                "3D Design"
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-hijau-yellow flex items-center transition-all duration-200 hover:translate-x-1"
                  >
                    <span className="text-hijau-yellow mr-2">›</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h4 className="font-bold text-xl mb-2">Contact Us</h4>
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-hijau-yellow rounded-full"></div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-hijau-blue/20 p-2 rounded-full mr-3 mt-0.5">
                  <MapPin size={18} className="text-hijau-yellow" />
                </div>
                <span>123 Green Street, Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center">
                <div className="bg-hijau-blue/20 p-2 rounded-full mr-3">
                  <Phone size={18} className="text-hijau-yellow" />
                </div>
                <a href="tel:+60123456789" className="hover:text-hijau-yellow transition-colors">
                  +60 12-345 6789
                </a>
              </li>
              <li className="flex items-center">
                <div className="bg-hijau-blue/20 p-2 rounded-full mr-3">
                  <Mail size={18} className="text-hijau-yellow" />
                </div>
                <a href="mailto:info@hijaugroup.com" className="hover:text-hijau-yellow transition-colors">
                  info@hijaugroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Hijau Group Landscape. All rights reserved. | <Link to="/contact" className="text-hijau-yellow hover:underline">Admin</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
