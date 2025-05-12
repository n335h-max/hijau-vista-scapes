
import { useEffect, useState } from "react";

interface ImagePreloadProps {
  src: string;
  onLoad?: () => void;
}

/**
 * Custom hook to preload images for better page performance
 * @param images Array of image URLs to preload
 * @returns boolean indicating if all images are loaded
 */
export const useImagePreload = (images: string[]) => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) {
      setLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = images.length;

    const handleImageLoad = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / totalImages) * 100));
      
      if (loadedCount === totalImages) {
        setLoaded(true);
      }
    };

    // Preload all images
    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count errors as loaded to avoid blocking
    });

    // Cleanup
    return () => {
      images.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [images]);

  return { loaded, progress };
};

/**
 * Component to preload a single image with callback
 */
export const ImagePreload: React.FC<ImagePreloadProps> = ({ src, onLoad }) => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (onLoad) onLoad();
    };
    
    return () => {
      img.onload = null;
    };
  }, [src, onLoad]);
  
  return null;
};
