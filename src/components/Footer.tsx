
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
    <footer className="bg-hijau-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Hijau <span className="text-hijau-yellow">Group</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Professional landscaping services to transform your outdoor spaces.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-hijau-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-hijau-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-hijau-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-hijau-yellow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-hijau-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-hijau-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-hijau-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-hijau-yellow transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-hijau-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-hijau-yellow transition-colors">
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-hijau-yellow transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-hijau-yellow transition-colors">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-hijau-yellow transition-colors">
                  Consultation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-hijau-yellow transition-colors">
                  3D Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-hijau-yellow" />
                <span>123 Green Street, Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-hijau-yellow" />
                <a href="tel:+60123456789" className="hover:text-hijau-yellow transition-colors">
                  +60 12-345 6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-hijau-yellow" />
                <a href="mailto:info@hijaugroup.com" className="hover:text-hijau-yellow transition-colors">
                  info@hijaugroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Hijau Group Landscape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
