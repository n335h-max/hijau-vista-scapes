
import React from "react";
import { Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-transparent to-hijau-yellow/5 p-6 rounded-lg border border-hijau-yellow/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-4">
          <div className="mt-1 bg-hijau-blue/10 p-3 rounded-full text-hijau-blue">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-hijau-blue">Phone Number</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+601110629990" className="text-hijau-dark text-lg font-medium hover:text-hijau-blue transition-colors flex items-center">
                +60 11-1062 9990
              </a>
              <div className="flex flex-col">
                <a href="tel:+601119990971" className="text-hijau-dark text-lg font-medium hover:text-hijau-blue transition-colors flex items-center">
                  +60 11-1999 0971
                </a>
                <span className="text-sm text-gray-500 font-medium">(Auto Admin)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="mt-1 bg-hijau-blue/10 p-3 rounded-full text-hijau-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M4 11a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7Z"/>
              <path d="m9 12 2 2 4-4"/>
              <path d="M7.5 4.2c-.3-.5-.9-.7-1.4-.4C4.3 4.9 4 6.4 4 7.9 4 16 10.1 19 12 20c1.9-1 8-4 8-12.1 0-1.5-.3-3-2.1-4.1-.5-.3-1.1-.1-1.4.4"/>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-hijau-blue">WhatsApp</h3>
            <a href="https://wa.me/601110629990" className="text-hijau-dark text-lg font-medium hover:text-hijau-blue transition-colors flex items-center">
              +60 11-1062 9990
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
