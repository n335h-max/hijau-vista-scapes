
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }

// Brand color overlay styles for aspect ratio component
export const AspectRatioWithOverlay = ({
  children,
  ratio = 16 / 9,
  className = "",
  overlayColor = "blue",
  ...props
}: React.ComponentProps<typeof AspectRatio> & {
  overlayColor?: "blue" | "yellow" | "gradient";
}) => {
  const getOverlayClass = () => {
    switch (overlayColor) {
      case "blue": 
        return "after:bg-hijau-blue/20";
      case "yellow": 
        return "after:bg-hijau-yellow/20";
      case "gradient":
        return "after:bg-gradient-to-r after:from-hijau-blue/10 after:to-hijau-yellow/10";
      default:
        return "after:bg-hijau-blue/20";
    }
  };

  return (
    <div className={`relative group overflow-hidden rounded-lg ${className}`}>
      <AspectRatio ratio={ratio} {...props}>
        {children}
      </AspectRatio>
      <div className={`absolute inset-0 after:absolute after:inset-0 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity ${getOverlayClass()}`} />
    </div>
  );
};
