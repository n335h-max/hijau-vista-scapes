
import React, { useState, useMemo } from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import { galleryItems } from "@/components/gallery/data";
import { GalleryItem } from "@/components/gallery/GalleryItem.interface";

const Gallery = () => {
  const [openImage, setOpenImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<number[] | null>(null);

  // Filter gallery items based on active filter
  const filteredItems = useMemo(() => {
    if (!activeFilter) return galleryItems;
    return galleryItems.filter(item => activeFilter.includes(item.id));
  }, [activeFilter]);

  // Handle filter changes
  const handleFilterChange = (ids: number[] | null) => {
    setActiveFilter(ids);
  };

  // Open the lightbox with the clicked image
  const openLightbox = (item: GalleryItem, index: number) => {
    setOpenImage(item);
    // When filtering, we need to adjust the index to match the filtered list
    setCurrentIndex(index);
  };

  // Navigate to the next image in the lightbox
  const nextImage = () => {
    const items = activeFilter ? filteredItems : galleryItems;
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    setOpenImage(items[currentIndex === items.length - 1 ? 0 : currentIndex + 1]);
  };

  // Navigate to the previous image in the lightbox
  const prevImage = () => {
    const items = activeFilter ? filteredItems : galleryItems;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setOpenImage(items[currentIndex === 0 ? items.length - 1 : currentIndex - 1]);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setOpenImage(null);
  };

  return (
    <>
      <GalleryHero />
      <GalleryFilter 
        onFilterChange={handleFilterChange} 
        activeFilter={activeFilter} 
      />
      <GalleryGrid 
        items={filteredItems} 
        onItemClick={openLightbox} 
      />
      <GalleryLightbox 
        openImage={openImage} 
        onClose={closeLightbox} 
        onNext={nextImage} 
        onPrev={prevImage} 
      />
      <GalleryCTA />
    </>
  );
};

export default Gallery;
