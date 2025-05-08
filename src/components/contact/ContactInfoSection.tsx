
import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactInfoSectionProps {
  onAdminLogin: () => void;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ onAdminLogin }) => {
  return (
    <div>
      <h2 className="heading-medium text-hijau-blue mb-8">Get In Touch</h2>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="mt-1 mr-4 bg-hijau-blue/10 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-hijau-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Location</h3>
            <p className="text-hijau-dark/70">
              123 Green Street, Kuala Lumpur, Malaysia
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-hijau-blue hover:underline mt-1 inline-block"
            >
              View on Map
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-4 bg-hijau-blue/10 p-3 rounded-full">
            <Phone className="h-6 w-6 text-hijau-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
            <p className="text-hijau-dark/70">
              <a href="tel:+60123456789" className="hover:text-hijau-blue">
                +60 12-345 6789
              </a>
            </p>
            <p className="text-hijau-dark/70">
              <a href="tel:+60123456790" className="hover:text-hijau-blue">
                +60 12-345 6790
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-4 bg-hijau-blue/10 p-3 rounded-full">
            <Mail className="h-6 w-6 text-hijau-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Email Address</h3>
            <p className="text-hijau-dark/70">
              <a href="mailto:info@hijaugroup.com" className="hover:text-hijau-blue">
                info@hijaugroup.com
              </a>
            </p>
            <p className="text-hijau-dark/70">
              <a href="mailto:support@hijaugroup.com" className="hover:text-hijau-blue">
                support@hijaugroup.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-4 bg-hijau-blue/10 p-3 rounded-full">
            <Clock className="h-6 w-6 text-hijau-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
            <div className="text-hijau-dark/70">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <Button 
          variant="outline" 
          onClick={onAdminLogin}
          className="text-hijau-blue border-hijau-blue hover:bg-hijau-blue hover:text-white"
        >
          Admin Login
        </Button>
      </div>
    </div>
  );
};

export default ContactInfoSection;
