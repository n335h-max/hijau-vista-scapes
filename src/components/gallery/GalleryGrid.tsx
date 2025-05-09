
import React from "react";
import { GalleryItem } from "./GalleryItem.interface";

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem, index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items, onItemClick }) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover-grow cursor-pointer"
              onClick={() => onItemClick(item, index)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
