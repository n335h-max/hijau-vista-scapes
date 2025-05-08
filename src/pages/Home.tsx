
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container-custom relative h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="heading-large mb-4 text-white animate-fade-in">
              Hijau Group Landscape
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-display animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Your landscape partner
            </p>
            <p className="text-lg mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Transform your outdoor spaces with our professional landscaping services. 
              We create beautiful, sustainable landscapes that enhance your property value.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button asChild size="lg" className="bg-hijau-blue hover:bg-hijau-blue/90">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:text-black hover:bg-white border-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Landscapers working" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="heading-medium text-hijau-blue mb-4">About Hijau Group</h2>
              <p className="mb-6 text-hijau-dark/80">
                With over 10 years of experience, Hijau Group Landscape has been transforming 
                residential and commercial properties across Malaysia. Our dedicated team of 
                landscaping professionals combines creativity with technical expertise to deliver 
                exceptional outdoor spaces.
              </p>
              <Button asChild variant="outline" className="group">
                <Link to="/about" className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-hijau-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-hijau-dark mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-hijau-dark/80">
              We offer a comprehensive range of landscaping services to meet 
              all your outdoor space needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="hover-grow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-hijau-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hijau-blue">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                    <path d="M18 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16"/>
                    <path d="M6 18h12"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Landscape Design</h3>
                <p className="text-hijau-dark/70 mb-4">
                  Custom landscape designs that blend aesthetics with functionality.
                </p>
                <div className="mt-auto">
                  <p className="mb-2">
                    <span className="line-through text-gray-500">RM2,000</span>{" "}
                    <span className="font-bold text-hijau-blue">RM1,800</span>
                  </p>
                  <Button asChild className="w-full bg-hijau-blue hover:bg-hijau-blue/90">
                    <Link to="/contact?service=design">Book Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="hover-grow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-hijau-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hijau-blue">
                    <rect x="2" y="6" width="20" height="12" rx="2"/>
                    <path d="M12 12h.01"/>
                    <path d="M17 12h.01"/>
                    <path d="M7 12h.01"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Construction</h3>
                <p className="text-hijau-dark/70 mb-4">
                  Expert implementation of landscape designs with quality materials.
                </p>
                <div className="mt-auto">
                  <p className="mb-2">
                    <span className="line-through text-gray-500">RM5,000</span>{" "}
                    <span className="font-bold text-hijau-blue">RM4,500</span>
                  </p>
                  <Button asChild className="w-full bg-hijau-blue hover:bg-hijau-blue/90">
                    <Link to="/contact?service=construction">Book Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="hover-grow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-hijau-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hijau-blue">
                    <path d="M8 6h10"/>
                    <path d="M6 12h9"/>
                    <path d="M11 18h7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
                <p className="text-hijau-dark/70 mb-4">
                  Regular maintenance services to keep your landscape looking its best.
                </p>
                <div className="mt-auto">
                  <p className="mb-2">
                    <span className="line-through text-gray-500">RM500</span>{" "}
                    <span className="font-bold text-hijau-blue">RM450</span>
                  </p>
                  <Button asChild className="w-full bg-hijau-blue hover:bg-hijau-blue/90">
                    <Link to="/contact?service=maintenance">Book Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-hijau-blue hover:bg-hijau-blue/90">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-hijau-dark mb-4">Our Recent Projects</h2>
            <p className="max-w-2xl mx-auto text-hijau-dark/80">
              Take a look at some of our recent landscape transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg shadow-md hover-grow">
                <img
                  src={`https://source.unsplash.com/random/600x400?landscape,garden&sig=${item}`}
                  alt={`Landscape project ${item}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="group">
              <Link to="/gallery" className="flex items-center">
                View Gallery
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section-padding bg-hijau-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-medium mb-4">Ready to Transform Your Landscape?</h2>
              <p className="mb-6">
                Contact us today for a free consultation. We'll help you create the outdoor space 
                of your dreams.
              </p>
              <Button asChild size="lg" className="bg-white text-hijau-blue hover:bg-hijau-yellow hover:text-hijau-dark">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-hijau-yellow">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+60 12-345 6789</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-hijau-yellow">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span>info@hijaugroup.com</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-hijau-yellow">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>123 Green Street, Kuala Lumpur, Malaysia</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-hijau-yellow">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Mon-Fri: 9am-6pm | Sat: 9am-2pm | Sun: Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
