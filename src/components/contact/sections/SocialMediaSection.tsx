
import React from "react";

const SocialMediaSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-hijau-blue/5 to-transparent p-6 rounded-lg border border-hijau-blue/10">
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
  );
};

export default SocialMediaSection;
