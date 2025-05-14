
import { useToast, toast } from "@/hooks/use-toast";

// Customizing toast defaults to use our new colors
toast.custom = (message, options) => {
  return toast(message, {
    ...options,
    style: {
      backgroundColor: '#195E8C', // Using our blue color
      color: 'white',
      ...options?.style,
    },
  });
};

export { useToast, toast };
