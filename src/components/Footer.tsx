
import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
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
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/09459ed9-aef9-43f6-80f7-fa2c86a42871.png" 
                alt="Hijau Group Logo" 
                className="h-16 w-auto mr-3"
              />
              <div>
                <h3 className="font-display text-3xl font-bold mb-2">
                  Hijau <span className="text-hijau-yellow">Group</span>
                </h3>
                <div className="w-16 h-1 bg-hijau-blue rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional landscaping services to transform your outdoor spaces into breathtaking environments.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/Hijau-Group-Landscape-100063573459541/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-hijau-blue p-3 rounded-full transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/hijaugroup.landscape/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-hijau-blue p-3 rounded-full transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@hijaugrouplandscape"
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-hijau-blue p-3 rounded-full transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                  <path d="M15 8h.01"/>
                  <path d="M20 12a8 8 0 1 0-8 8"/>
                  <path d="M9 15a1 1 0 0 0 1 1"/>
                  <path d="M12 16c1.5 0 3-1.5 3-3"/>
                  <path d="M3 16L23 7"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/601110629990"
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-hijau-blue p-3 rounded-full transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7Z"/>
                  <path d="m9 12 2 2 4-4"/>
                  <path d="M7.5 4.2c-.3-.5-.9-.7-1.4-.4C4.3 4.9 4 6.4 4 7.9 4 16 10.1 19 12 20c1.9-1 8-4 8-12.1 0-1.5-.3-3-2.1-4.1-.5-.3-1.1-.1-1.4.4"/>
                </svg>
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
              {["Home", "About", "Packages", "Gallery", "Contact"].map((item) => (
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

          {/* Packages */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h4 className="font-bold text-xl mb-2">Our Packages</h4>
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-hijau-yellow rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {[
                "Smart Package",
                "Signature Package",
                "Elite Package",
                "Custom Package",
                "Consultation"
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/packages" 
                    className="text-gray-300 hover:text-hijau-yellow flex items-center transition-all duration-200 hover:translate-x-1"
                  >
                    <span className="text-hijau-yellow mr-2">›</span> {item}
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
                <span>
                  Registered Address: No 168-1, Jalan S2 B22, Pusat Dagangan Seremban 2, 70300 Seremban, Negeri Sembilan
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-hijau-blue/20 p-2 rounded-full mr-3 mt-0.5">
                  <MapPin size={18} className="text-hijau-yellow" />
                </div>
                <span>
                  Site Office: No 324, Jalan S2 A7/2, Green Street Homes, 70300 Seremban, Negeri Sembilan
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-hijau-blue/20 p-2 rounded-full mr-3">
                  <Phone size={18} className="text-hijau-yellow" />
                </div>
                <a href="tel:+601110629990" className="hover:text-hijau-yellow transition-colors">
                  +60 11-1062 9990
                </a>
              </li>
              <li className="flex items-center">
                <div className="bg-hijau-blue/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hijau-yellow">
                    <path d="M4 11a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7Z"/>
                    <path d="m9 12 2 2 4-4"/>
                    <path d="M7.5 4.2c-.3-.5-.9-.7-1.4-.4C4.3 4.9 4 6.4 4 7.9 4 16 10.1 19 12 20c1.9-1 8-4 8-12.1 0-1.5-.3-3-2.1-4.1-.5-.3-1.1-.1-1.4.4"/>
                  </svg>
                </div>
                <a href="https://wa.me/601110629990" className="hover:text-hijau-yellow transition-colors">
                  +60 11-1062 9990 (WhatsApp)
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
