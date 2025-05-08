
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const faqs = [
    {
      question: "What services does Hijau Group Landscape offer?",
      answer:
        "We offer a comprehensive range of landscaping services including landscape design and build, consultation, 3D & CAD drawings, construction services, grass installation, water features, tiny house construction, maintenance, and nursery services.",
    },
    {
      question: "How much does a typical landscaping project cost?",
      answer:
        "The cost of landscaping projects varies widely depending on the size, complexity, and specific requirements. We offer free consultations to provide accurate quotes based on your specific needs.",
    },
    {
      question: "How long does a landscaping project take to complete?",
      answer:
        "Project duration depends on the scope and complexity. Small projects may take a few days, while larger, more complex projects can take several weeks or months. We provide estimated timelines during our consultation.",
    },
    {
      question: "Do you offer maintenance services after project completion?",
      answer:
        "Yes, we offer ongoing maintenance services to keep your landscape looking its best. We can create a customized maintenance schedule based on your landscape's specific needs.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve Kuala Lumpur and surrounding areas in Malaysia. For projects outside of our primary service area, please contact us to discuss possibilities.",
    },
    {
      question: "How do I get started with my landscaping project?",
      answer:
        "Simply contact us through our website, phone, or email to schedule a free consultation. During this consultation, we'll discuss your ideas, preferences, and budget to create a customized plan for your project.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container-custom relative h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="heading-large mb-4">About Hijau Group</h1>
            <p className="text-lg md:text-xl">
              Get to know our story, mission, vision, and the team behind Hijau Group Landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap border-b border-gray-200 mb-8">
            <button
              className={`py-3 px-6 font-medium text-sm md:text-base border-b-2 ${
                activeTab === "mission"
                  ? "border-hijau-blue text-hijau-blue"
                  : "border-transparent hover:text-hijau-blue"
              }`}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm md:text-base border-b-2 ${
                activeTab === "vision"
                  ? "border-hijau-blue text-hijau-blue"
                  : "border-transparent hover:text-hijau-blue"
              }`}
              onClick={() => setActiveTab("vision")}
            >
              Our Vision
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm md:text-base border-b-2 ${
                activeTab === "story"
                  ? "border-hijau-blue text-hijau-blue"
                  : "border-transparent hover:text-hijau-blue"
              }`}
              onClick={() => setActiveTab("story")}
            >
              Our Story
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "mission" && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="heading-medium text-hijau-blue mb-4">Our Mission</h2>
                    <p className="mb-4 text-hijau-dark/80">
                      At Hijau Group Landscape, our mission is to create sustainable, beautiful, and functional outdoor spaces 
                      that enhance the quality of life for our clients and contribute positively to the environment.
                    </p>
                    <p className="mb-4 text-hijau-dark/80">
                      We are committed to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-hijau-dark/80">
                      <li>Delivering exceptional landscape designs tailored to each client's unique needs and preferences</li>
                      <li>Using sustainable practices and environmentally friendly materials in all our projects</li>
                      <li>Providing superior craftsmanship and attention to detail in every aspect of our work</li>
                      <li>Maintaining clear communication and transparency throughout the entire project process</li>
                      <li>Offering ongoing support and maintenance to ensure the longevity of our landscapes</li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1617850687395-620757c8e5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                      alt="Landscapers working on a garden"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                      alt="Modern landscape design"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <h2 className="heading-medium text-hijau-blue mb-4">Our Vision</h2>
                    <p className="mb-4 text-hijau-dark/80">
                      Our vision at Hijau Group Landscape is to be the leading landscaping company in Malaysia, 
                      recognized for our innovative designs, sustainable practices, and exceptional customer service.
                    </p>
                    <p className="mb-4 text-hijau-dark/80">
                      We aspire to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-hijau-dark/80">
                      <li>Set new standards for landscape design and implementation in the region</li>
                      <li>Pioneer eco-friendly landscaping solutions that combine beauty with sustainability</li>
                      <li>Build lasting relationships with our clients based on trust and satisfaction</li>
                      <li>Inspire a greater appreciation for well-designed outdoor spaces</li>
                      <li>Contribute to greener, more sustainable communities through our work</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "story" && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="heading-medium text-hijau-blue mb-4">Our Story</h2>
                    <p className="mb-4 text-hijau-dark/80">
                      Hijau Group Landscape was founded in 2010 by Ahmad Ibrahim, a passionate landscape architect with a 
                      vision to transform outdoor spaces across Malaysia.
                    </p>
                    <p className="mb-4 text-hijau-dark/80">
                      What began as a small operation with just three employees has now grown into a comprehensive landscaping 
                      company with over 30 skilled professionals, including designers, horticulturists, construction specialists, 
                      and maintenance experts.
                    </p>
                    <p className="mb-4 text-hijau-dark/80">
                      Over the years, we have completed hundreds of projects ranging from small residential gardens to large 
                      commercial landscapes. Our commitment to quality and client satisfaction has earned us a reputation as 
                      one of the most trusted landscaping companies in the region.
                    </p>
                    <p className="text-hijau-dark/80">
                      Today, Hijau Group continues to grow and evolve, embracing new technologies and sustainable practices 
                      while staying true to our core values of excellence, integrity, and environmental responsibility.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Company history"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-hijau-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-hijau-dark mb-4">Our Team</h2>
            <p className="max-w-2xl mx-auto text-hijau-dark/80">
              Meet the dedicated professionals who make Hijau Group Landscape a leader in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <Card className="hover-grow">
              <CardContent className="pt-6 px-6 pb-8 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Ahmad Ibrahim"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Ahmad Ibrahim</h3>
                <p className="text-hijau-blue font-medium mb-3">Founder & CEO</p>
                <p className="text-hijau-dark/70 text-sm">
                  With over 20 years of experience in landscape architecture, Ahmad leads 
                  our team with passion and expertise.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="hover-grow">
              <CardContent className="pt-6 px-6 pb-8 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    alt="Sarah Tan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Sarah Tan</h3>
                <p className="text-hijau-blue font-medium mb-3">Design Director</p>
                <p className="text-hijau-dark/70 text-sm">
                  Sarah's innovative designs and attention to detail have transformed 
                  countless outdoor spaces.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="hover-grow">
              <CardContent className="pt-6 px-6 pb-8 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Raj Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Raj Patel</h3>
                <p className="text-hijau-blue font-medium mb-3">Construction Manager</p>
                <p className="text-hijau-dark/70 text-sm">
                  Raj ensures all projects are executed to the highest standards of 
                  quality and safety.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 4 */}
            <Card className="hover-grow">
              <CardContent className="pt-6 px-6 pb-8 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                    alt="Mei Ling"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Mei Ling</h3>
                <p className="text-hijau-blue font-medium mb-3">Horticulture Specialist</p>
                <p className="text-hijau-dark/70 text-sm">
                  Mei's extensive knowledge of plants and sustainable landscaping 
                  practices guides our selection of greenery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-hijau-dark mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-hijau-dark/80">
              Find answers to common questions about our landscaping services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hijau-blue text-white">
        <div className="container-custom text-center">
          <h2 className="heading-medium mb-4">Ready to Transform Your Landscape?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation with our team of landscape experts. 
            Let's bring your outdoor vision to life!
          </p>
          <Button asChild size="lg" className="bg-white text-hijau-blue hover:bg-hijau-yellow hover:text-hijau-dark">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
