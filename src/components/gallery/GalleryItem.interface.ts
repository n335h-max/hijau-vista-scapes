
export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  highlight?: boolean; // Optional property to highlight special items
}
