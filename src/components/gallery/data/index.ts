
import { GalleryItem } from "../GalleryItem.interface";
import { residentialGalleryItems } from "./residential-items";
import { commercialGalleryItems } from "./commercial-items";

// Combine all gallery items into a single array
export const galleryItems: GalleryItem[] = [
  ...residentialGalleryItems,
  ...commercialGalleryItems
];

// Export the individual category arrays for potential direct use
export { residentialGalleryItems, commercialGalleryItems };

// Helper function to get items by ID
export const getItemById = (id: number): GalleryItem | undefined => {
  return galleryItems.find(item => item.id === id);
};

// Helper function to get items by type
export const getItemsByType = (type: string): GalleryItem[] => {
  return galleryItems.filter(item => item.type === type);
};

// Helper function to get featured items (can be customized based on needs)
export const getFeaturedItems = (count: number = 9): GalleryItem[] => {
  // IDs of featured items (can be customized)
  const featuredIds = [1, 2, 13, 12, 15, 21, 27, 28, 31];
  
  return featuredIds
    .slice(0, count)
    .map(id => getItemById(id))
    .filter((item): item is GalleryItem => item !== undefined);
};
