
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactPreview = () => {
  return (
    <section className="section-padding bg-hijau-blue text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-medium mb-4">Ready to Transform Your Landscape?</h2>
            <p className="mb-6">
              Contact us today for a free consultation. We'll help you create the outdoor space 
              of your dreams.
            </p>
            <Button asChild size="lg" className="bg-white text-hijau-blue hover:bg-hijau-yellow hover:text-hijau-dark">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-hijau-yellow">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+60 11-1062 9990</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-hijau-yellow">
                  <path d="M4 11a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7Z"/>
                  <path d="m9 12 2 2 4-4"/>
                  <path d="M7.5 4.2c-.3-.5-.9-.7-1.4-.4C4.3 4.9 4 6.4 4 7.9 4 16 10.1 19 12 20c1.9-1 8-4 8-12.1 0-1.5-.3-3-2.1-4.1-.5-.3-1.1-.1-1.4.4"/>
                </svg>
                <span>WhatsApp: +60 11-1062 9990</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-hijau-yellow">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>info@hijaugroup.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-hijau-yellow">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p className="text-sm font-semibold">Registered Office:</p>
                  <p>No 168-1, Jalan S2 B22, Pusat Dagangan Seremban 2, 70300 Seremban, Negeri Sembilan</p>
                </div>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-hijau-yellow">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Mon-Sat: 9am-5:30pm | Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
