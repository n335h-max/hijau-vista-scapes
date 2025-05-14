
import { useToast as useHookToast, toast as hookToast, ToasterToast } from "@/hooks/use-toast";

export const useToast = useHookToast;

// Regular toast
export const toast = hookToast;

// Custom styled toast with blue background
export const customToast = (message: string, options?: Partial<ToasterToast>) => {
  return toast({
    title: message,
    ...options,
    className: "bg-hijau-blue text-white border-hijau-blue-light",
  });
};

// Success toast with yellow accent
export const successToast = (message: string, options?: Partial<ToasterToast>) => {
  return toast({
    title: message,
    ...options,
    className: "bg-white border-l-4 border-hijau-yellow text-hijau-dark",
  });
};
