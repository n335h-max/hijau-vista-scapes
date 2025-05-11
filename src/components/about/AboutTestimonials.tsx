
import React, { useEffect, useState } from "react";
import { Star, User } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  quote: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Suhanthan Bhuvana Kumar",
    rating: 5,
    quote: "My house had a levelling problem... They were very helpful, accommodating, and professional. Highly recommended!",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 2,
    name: "Amir Hamidi Amha",
    rating: 5,
    quote: "Redid our yard within a week. Good workmanship and open to ideas. Polite team and clean workspace. Thank you!",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
  },
  {
    id: 3,
    name: "Fahiyah Yahaya",
    rating: 5,
    quote: "Trusted landscape contractor. Fantastic service.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
  },
  {
    id: 4,
    name: "Vinod Raj Anandan",
    rating: 5,
    quote: "Excellent work and quick responses. Great customer service!",
    image: "https://images.unsplash.com/photo-1501286353178-1ec871214838"
  },
  {
    id: 5,
    name: "M Naim",
    rating: 5,
    quote: "Professionally done! Highly recommended.",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
  },
  {
    id: 6,
    name: "Qaesya Azizi",
    rating: 5,
    quote: "Smooth project with the best timeline and great results!",
  },
  {
    id: 7,
    name: "H Zamzuri",
    rating: 5,
    quote: "Designed a lovely backyard garden. Very happy!",
  },
  {
    id: 8,
    name: "Rahamat Yaakob",
    rating: 5,
    quote: "Neat work, friendly staff. Like chatting with siblings. Quality and service both excellent.",
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4 mr-0.5",
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
};

const AboutTestimonials = () => {
  const isMobile = useMobile();
  const [visibleItems, setVisibleItems] = useState(isMobile ? 1 : 4);

  // Update visible items when screen size changes
  useEffect(() => {
    setVisibleItems(isMobile ? 1 : 4);
  }, [isMobile]);

  return (
    <section className="section-padding bg-nature-gradient relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-medium text-hijau-blue mb-2">Hear from our happy clients</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge className="text-lg py-1 px-3 bg-hijau-blue text-white font-bold">
              4.9/5
            </Badge>
            <div className="flex items-center">
              <StarRating rating={5} />
              <span className="ml-2 text-hijau-dark/80 font-medium">
                Google Business Reviews
              </span>
            </div>
          </div>
        </div>

        {isMobile ? (
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static mr-2 translate-y-0" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, rating, quote, image } = testimonial;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-hijau-blue/30">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <Avatar className="h-12 w-12 mr-4">
            {image ? (
              <AvatarImage src={image} alt={name} />
            ) : null}
            <AvatarFallback className="bg-hijau-light text-hijau-blue">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-hijau-dark truncate">{name}</p>
            <StarRating rating={rating} />
          </div>
        </div>
        <p className="text-hijau-dark/80 italic">"{quote}"</p>
      </CardContent>
      <CardFooter className="pt-0 pb-4 px-6">
        <div className="w-8 h-1 bg-hijau-blue/20 rounded-full"></div>
      </CardFooter>
    </Card>
  );
};

export default AboutTestimonials;
