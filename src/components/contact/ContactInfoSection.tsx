
import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactInfoSectionProps {
  onAdminLogin: () => void;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ onAdminLogin }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 transition-all hover:shadow-2xl border border-gray-100">
      <h2 className="heading-medium text-hijau-blue mb-8 relative inline-block">
        Get In Touch
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-hijau-yellow rounded-full"></span>
      </h2>
      
      <div className="space-y-8">
        <div className="flex items-start group">
          <div className="mt-1 mr-6 bg-hijau-blue/10 p-3 rounded-full group-hover:bg-hijau-blue/20 transition-colors">
            <MapPin className="h-6 w-6 text-hijau-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Locations</h3>
            <div className="text-hijau-dark/70 mb-4">
              <p className="font-semibold">Registered Address:</p>
              <p>No 168-1, Jalan S2 B22,</p>
              <p>Pusat Dagangan Seremban 2,</p>
              <p>70300 Seremban,</p>
              <p>Negeri Sembilan</p>
            </div>
            <div className="text-hijau-dark/70">
              <p className="font-semibold">Site Office:</p>
              <p>No 324, Jalan S2 A7/2,</p>
              <p>Green Street Homes,</p>
              <p>70300 Seremban,</p>
              <p>Negeri Sembilan</p>
            </div>
            <a 
              href="https://maps.google.com/maps?cid=7425140252329389889" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-hijau-blue hover:text-hijau-blue/80 mt-2 inline-block border-b border-transparent hover:border-hijau-blue transition-colors"
            >
              View on Map
            </a>
          </div>
        </div>

        <div className="flex items-start group">
          <div className="mt-1 mr-6 bg-hijau-blue/10 p-3 rounded-full group-hover:bg-hijau-blue/20 transition-colors">
            <Phone className="h-6 w-6 text-hijau-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
            <p className="text-hijau-dark/70">
              <a href="tel:+601110629990" className="hover:text-hijau-blue transition-colors">
                +60 11-1062 9990
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start group">
          <div className="mt-1 mr-6 bg-hijau-blue/10 p-3 rounded-full group-hover:bg-hijau-blue/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-hijau-blue">
              <path d="M4 11a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7Z"/>
              <path d="m9 12 2 2 4-4"/>
              <path d="M7.5 4.2c-.3-.5-.9-.7-1.4-.4C4.3 4.9 4 6.4 4 7.9 4 16 10.1 19 12 20c1.9-1 8-4 8-12.1 0-1.5-.3-3-2.1-4.1-.5-.3-1.1-.1-1.4.4"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <p className="text-hijau-dark/70">
              <a href="https://wa.me/601110629990" className="hover:text-hijau-blue transition-colors">
                +60 11-1062 9990
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start group">
          <div className="mt-1 mr-6 bg-hijau-blue/10 p-3 rounded-full group-hover:bg-hijau-blue/20 transition-colors">
            <Mail className="h-6 w-6 text-hijau-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Email Address</h3>
            <p className="text-hijau-dark/70">
              <a href="mailto:info@hijaugroup.com" className="hover:text-hijau-blue transition-colors">
                info@hijaugroup.com
              </a>
            </p>
            <p className="text-hijau-dark/70">
              <a href="mailto:support@hijaugroup.com" className="hover:text-hijau-blue transition-colors">
                support@hijaugroup.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start group">
          <div className="mt-1 mr-6 bg-hijau-blue/10 p-3 rounded-full group-hover:bg-hijau-blue/20 transition-colors">
            <Clock className="h-6 w-6 text-hijau-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
            <div className="text-hijau-dark/70 space-y-1">
              <p className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 5:30 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">9:00 AM - 5:30 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">Closed</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/p/Hijau-Group-Landscape-100063573459541/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a
            href="https://www.instagram.com/hijaugroup.landscape/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="https://www.tiktok.com/@hijaugrouplandscape"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            aria-label="TikTok"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 11a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7Z"/>
              <path d="m9 12 2 2 4-4"/>
              <path d="M7.5 4.2c-.3-.5-.9-.7-1.4-.4C4.3 4.9 4 6.4 4 7.9 4 16 10.1 19 12 20c1.9-1 8-4 8-12.1 0-1.5-.3-3-2.1-4.1-.5-.3-1.1-.1-1.4.4"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Button 
          variant="outline" 
          onClick={onAdminLogin}
          className="text-hijau-blue border-hijau-blue hover:bg-hijau-blue hover:text-white transition-colors"
        >
          Admin Login
        </Button>
      </div>
    </div>
  );
};

export default ContactInfoSection;
