
import React from "react";
import { Phone, MapPin, FilePen, Check, X, Lock, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BookingFlowProcess = () => {
  const steps = [
    {
      icon: <Phone className="h-10 w-10 text-hijau-blue" />,
      number: "01",
      title: "Initial Contact",
      description: "Client reaches out to Hijau Group Landscape for landscape services."
    },
    {
      icon: <MapPin className="h-10 w-10 text-hijau-blue" />,
      number: "02",
      title: "Site Visit & Consultation",
      description: "Our team visits the site for consultation, measurements, and discussion with client."
    },
    {
      icon: <FilePen className="h-10 w-10 text-hijau-blue" />,
      number: "03",
      title: "Design & Quotation",
      description: "Gathered detailed requirements. Draft design concept and cost are prepared for review."
    },
    {
      icon: <div className="flex space-x-2">
              <Check className="h-10 w-10 text-green-500" />
              <X className="h-10 w-10 text-red-500" />
            </div>,
      number: "04",
      title: "Decision",
      description: "Yes – move on to design confirmation stage. No – No further action unless client re-engages."
    },
    {
      icon: <Lock className="h-10 w-10 text-hijau-blue" />,
      number: "05",
      title: "Design Confirmation & Deposit",
      description: "Design ideas are presented. Deposit is made to secure the project."
    },
    {
      icon: <Package className="h-10 w-10 text-hijau-blue" />,
      number: "06",
      title: "Project Kick Off",
      description: "Team & logistics are arranged. On site work begins."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-medium text-hijau-dark mb-4">STEPS TO YOUR DREAM GARDEN</h2>
          <p className="max-w-2xl mx-auto text-hijau-dark/80">
            Our streamlined process ensures a smooth journey from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-2 bg-hijau-light rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-5xl font-bold text-hijau-yellow opacity-30">{step.number}</span>
                    <h3 className="text-xl font-semibold text-hijau-blue mt-1">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingFlowProcess;
