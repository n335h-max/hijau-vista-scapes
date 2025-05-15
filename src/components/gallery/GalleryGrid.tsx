
import React from "react";
import { GalleryItem } from "./GalleryItem.interface";
import { useMobile } from "@/hooks/use-mobile";

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem, index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items, onItemClick }) => {
  const isMobile = useMobile();
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover-grow cursor-pointer"
              onClick={() => onItemClick(item, index)}
            >
              <div className={`${isMobile ? 'h-52' : 'h-64'} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-white text-base md:text-xl font-semibold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-white/90 text-xs md:text-sm">{item.type}</p>
              </div>
              {/* Always visible on mobile for better UX */}
              {isMobile && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                  <h3 className="text-white text-sm md:text-base font-medium truncate">{item.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
