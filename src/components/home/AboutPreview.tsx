
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-hijau-yellow/10">
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
              With <span className="font-bold text-hijau-blue">over 12 years of experience</span>, Hijau Group Landscape has been transforming 
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
  );
};

export default AboutPreview;
