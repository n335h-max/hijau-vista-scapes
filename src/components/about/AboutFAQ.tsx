
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutFAQ = () => {
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
      question: "How do I get started with my landscaping project?",
      answer:
        "Simply contact us through our website, phone, or email to schedule a free consultation. During this consultation, we'll discuss your ideas, preferences, and budget to create a customized plan for your project.",
    },
  ];

  return (
    <section className="section-padding bg-hijau-light">
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
  );
};

export default AboutFAQ;
