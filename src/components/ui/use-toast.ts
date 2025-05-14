
import { useToast, toast } from "@/hooks/use-toast";

// Creating a wrapper function that applies our custom styles
const customToast = (props) => {
  return toast({
    ...props,
    style: {
      backgroundColor: '#195E8C', // Using our blue color
      color: 'white',
      ...props?.style,
    },
  });
};

export { useToast, toast, customToast };
