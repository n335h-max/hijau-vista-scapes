
import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ContactInfoSectionProps {
  onAdminLogin: () => void;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ onAdminLogin }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100">
      {/* Decorative header with enhanced background image and overlay */}
      <div className="relative h-32 bg-hijau-blue">
        <div className="absolute inset-0 bg-gradient-to-r from-hijau-blue to-hijau-blue-light opacity-90"></div>
        <AspectRatio ratio={16/4}>
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1576234699886-7eb7f11aeceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-30"></div>
        </AspectRatio>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="heading-medium text-white mb-0 relative inline-block z-10 font-display">
            Get In Touch
            <span className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-hijau-yellow/80"></span>
          </h2>
        </div>
      </div>
      
      <div className="p-8">
        <div className="space-y-8">
          <div className="flex items-start group transition-all duration-300 transform hover:-translate-y-1">
            <div className="mt-1 mr-6 bg-hijau-blue/10 p-3 rounded-full group-hover:bg-hijau-blue group-hover:text-white transition-colors duration-300">
              <MapPin className="h-6 w-6 text-hijau-blue group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-hijau-blue">Our Locations</h3>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-hijau-blue shadow-sm hover:shadow transition-shadow duration-300">
                <p className="font-semibold text-hijau-dark">Registered Address:</p>
                <p className="text-hijau-dark/70">No 168-1, Jalan S2 B22,</p>
                <p className="text-hijau-dark/70">Pusat Dagangan Seremban 2,</p>
                <p className="text-hijau-dark/70">70300 Seremban,</p>
                <p className="text-hijau-dark/70">Negeri Sembilan</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-hijau-yellow shadow-sm hover:shadow transition-shadow duration-300">
                <p className="font-semibold text-hijau-dark">Site Office:</p>
                <p className="text-hijau-dark/70">No 324, Jalan S2 A7/2,</p>
                <p className="text-hijau-dark/70">Green Street Homes,</p>
                <p className="text-hijau-dark/70">70300 Seremban,</p>
                <p className="text-hijau-dark/70">Negeri Sembilan</p>
              </div>
              
              <a 
                href="https://maps.google.com/maps?cid=7425140252329389889" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-hijau-blue hover:text-hijau-dark transition-colors font-medium border-b border-dashed border-hijau-blue/50 hover:border-hijau-blue"
              >
                View on Map
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="flex items-start group transition-all duration-300 transform hover:-translate-y-1">
            <div className="mt-1 mr-6 bg-hijau-blue/10 p-3 rounded-full group-hover:bg-hijau-blue group-hover:text-white transition-colors duration-300">
              <Phone className="h-6 w-6 text-hijau-blue group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-hijau-blue">Phone Number</h3>
              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-hijau-blue shadow-sm hover:shadow transition-shadow duration-300">
                <a href="tel:+601110629990" className="text-hijau-dark text-lg font-medium hover:text-hijau-blue transition-colors flex items-center">
                  +60 11-1062 9990
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start group transition-all duration-300 transform hover:-translate-y-1">
            <div className="mt-1 mr-6 bg-hijau-blue/10 p-3 rounded-full group-hover:bg-hijau-blue group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-hijau-blue group-hover:text-white transition-colors duration-300">
                <path d="M4 11a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7Z"/>
                <path d="m9 12 2 2 4-4"/>
                <path d="M7.5 4.2c-.3-.5-.9-.7-1.4-.4C4.3 4.9 4 6.4 4 7.9 4 16 10.1 19 12 20c1.9-1 8-4 8-12.1 0-1.5-.3-3-2.1-4.1-.5-.3-1.1-.1-1.4.4"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-hijau-blue">WhatsApp</h3>
              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-hijau-yellow shadow-sm hover:shadow transition-shadow duration-300">
                <a href="https://wa.me/601110629990" className="text-hijau-dark text-lg font-medium hover:text-hijau-blue transition-colors flex items-center">
                  +60 11-1062 9990
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Chat Now</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start group transition-all duration-300 transform hover:-translate-y-1">
            <div className="mt-1 mr-6 bg-hijau-blue/10 p-3 rounded-full group-hover:bg-hijau-blue group-hover:text-white transition-colors duration-300">
              <Mail className="h-6 w-6 text-hijau-blue group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-hijau-blue">Email Address</h3>
              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-hijau-blue mb-2 shadow-sm hover:shadow transition-shadow duration-300">
                <a href="mailto:info@hijaugroup.com" className="text-hijau-dark text-lg font-medium hover:text-hijau-blue transition-colors flex items-center">
                  info@hijaugroup.com
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-hijau-yellow shadow-sm hover:shadow transition-shadow duration-300">
                <a href="mailto:support@hijaugroup.com" className="text-hijau-dark text-lg font-medium hover:text-hijau-blue transition-colors flex items-center">
                  support@hijaugroup.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start group transition-all duration-300 transform hover:-translate-y-1">
            <div className="mt-1 mr-6 bg-hijau-blue/10 p-3 rounded-full group-hover:bg-hijau-blue group-hover:text-white transition-colors duration-300">
              <Clock className="h-6 w-6 text-hijau-blue group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-hijau-blue">Business Hours</h3>
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-hijau-blue shadow-sm hover:shadow transition-shadow duration-300">
                <div className="text-hijau-dark space-y-1.5">
                  <div className="flex justify-between items-center py-1 border-b border-dashed border-gray-200">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="font-semibold bg-hijau-blue/10 px-2 py-0.5 rounded text-hijau-blue">9:00 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-dashed border-gray-200">
                    <span className="font-medium">Saturday:</span>
                    <span className="font-semibold bg-hijau-blue/10 px-2 py-0.5 rounded text-hijau-blue">9:00 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium">Sunday:</span>
                    <span className="font-semibold bg-hijau-yellow/10 px-2 py-0.5 rounded text-hijau-dark">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pb-4">
          <h3 className="text-lg font-semibold mb-4 text-hijau-blue">Follow Us</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.facebook.com/p/Hijau-Group-Landscape-100063573459541/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/hijaugroup.landscape/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a
              href="https://www.tiktok.com/@hijaugrouplandscape"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
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
              className="bg-hijau-blue/10 hover:bg-hijau-blue text-hijau-blue hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
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

        <div className="mt-10 pt-8 border-t border-gray-200">
          <Button 
            variant="outline" 
            onClick={onAdminLogin}
            className="text-hijau-blue border-hijau-blue hover:bg-hijau-blue hover:text-white transition-colors"
          >
            Admin Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
