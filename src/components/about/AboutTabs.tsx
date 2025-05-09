
import React, { useState } from "react";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
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
  );
};

export default AboutTabs;
