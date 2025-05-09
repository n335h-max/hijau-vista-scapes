
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GalleryItem } from "./GalleryItem.interface";

interface GalleryLightboxProps {
  openImage: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ 
  openImage, 
  onClose, 
  onNext, 
  onPrev 
}) => {
  if (!openImage) return null;

  return (
    <Dialog open={!!openImage} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-black/90 border-none overflow-hidden">
        <div className="relative">
          <img
            src={openImage.image}
            alt={openImage.title}
            className="w-full h-auto max-h-[80vh] object-contain mx-auto"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 bg-white">
          <DialogHeader>
            <DialogTitle>{openImage.title}</DialogTitle>
            <DialogDescription>{openImage.description}</DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryLightbox;
