
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPreview = () => {
  return (
    <section className="section-padding bg-hijau-blue text-white my-8 mx-4 rounded-lg shadow-lg">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="heading-medium mb-4">Ready to Transform Your Landscape?</h2>
            <p className="mb-6 opacity-90 text-lg">
              Contact us today for a free consultation. We'll help you create the outdoor space 
              of your dreams.
            </p>
            <Button asChild size="lg" className="bg-white text-hijau-blue hover:bg-hijau-yellow hover:text-hijau-dark transition-all transform hover:-translate-y-1">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 animate-fade-in hover:bg-white/15 transition-colors duration-300 hover:shadow-xl">
            <div className="relative mb-4">
              <h3 className="text-xl font-semibold text-hijau-yellow relative inline-block">
                Contact Information
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-white/40 rounded-full"></span>
              </h3>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full -z-10"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                <div className="mr-3 bg-white/10 p-2 rounded-full text-hijau-yellow">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-white/90 font-medium">+60 11-1062 9990</span>
              </div>
              
              <div className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                <div className="mr-3 bg-white/10 p-2 rounded-full text-hijau-yellow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M4 11a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7Z"/>
                    <path d="m9 12 2 2 4-4"/>
                    <path d="M7.5 4.2c-.3-.5-.9-.7-1.4-.4C4.3 4.9 4 6.4 4 7.9 4 16 10.1 19 12 20c1.9-1 8-4 8-12.1 0-1.5-.3-3-2.1-4.1-.5-.3-1.1-.1-1.4.4"/>
                  </svg>
                </div>
                <span className="text-white/90 font-medium">WhatsApp: +60 11-1062 9990</span>
              </div>
              
              <div className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                <div className="mr-3 bg-white/10 p-2 rounded-full text-hijau-yellow">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-white/90 font-medium truncate">contactus@hijaugroup.com.my</span>
              </div>
              
              <div className="flex items-center transform transition-transform duration-300 hover:translate-x-1">
                <div className="mr-3 bg-white/10 p-2 rounded-full text-hijau-yellow">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="text-white/90 font-medium">Mon-Sat: 9am-5:30pm | Sun: Closed</span>
              </div>
              
              <div className="flex items-start transform transition-transform duration-300 hover:translate-x-1">
                <div className="mr-3 bg-white/10 p-2 rounded-full text-hijau-yellow mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-hijau-yellow">Registered Office:</p>
                  <p className="text-white/80 text-sm">No 168-1, Jalan S2 B22, Pusat Dagangan Seremban 2, 70300 Seremban, Negeri Sembilan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
