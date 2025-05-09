
import React, { useState } from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import { galleryItems } from "@/components/gallery/galleryItems.data";
import { GalleryItem } from "@/components/gallery/GalleryItem.interface";

const Gallery = () => {
  const [openImage, setOpenImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open the lightbox with the clicked image
  const openLightbox = (item: GalleryItem, index: number) => {
    setOpenImage(item);
    setCurrentIndex(index);
  };

  // Navigate to the next image in the lightbox
  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
    setOpenImage(galleryItems[currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1]);
  };

  // Navigate to the previous image in the lightbox
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
    setOpenImage(galleryItems[currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1]);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setOpenImage(null);
  };

  return (
    <>
      <GalleryHero />
      <GalleryGrid items={galleryItems} onItemClick={openLightbox} />
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
