
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
                  <ol className="space-y-6 text-hijau-dark/80">
                    <li>
                      <div className="flex gap-3">
                        <span className="font-bold text-hijau-blue">01.</span>
                        <p>To deliver creative landscape designs that balance aesthetic beauty, functionality, and environmental harmony.</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-3">
                        <span className="font-bold text-hijau-blue">02.</span>
                        <p>To provide professional, high-quality services tailored to the specific needs of each client.</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-3">
                        <span className="font-bold text-hijau-blue">03.</span>
                        <p>To offer exceptional landscaping solutions and comprehensive consultancy for a seamless, fulfilling experience.</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-3">
                        <span className="font-bold text-hijau-blue">04.</span>
                        <p>To build lasting relationships rooted in trust, reliability, and professionalism.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div>
                  <img
                    src="/lovable-uploads/29524c64-19b4-4efb-8123-8238e80aa031.png"
                    alt="Landscaper trimming hedge"
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
                  <p className="text-hijau-dark/80">
                    To become a leading force in the landscaping industry by creating beautiful, sustainable, and functional outdoor spaces that enhance aesthetic appeal and improve quality of life for communities.
                  </p>
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
                    Founded on January 29, 2013, Hijau Group has been dedicated to transforming outdoor spaces into harmonious works of art. With over 12 years of experience and more than 500 successful projects — including residential, commercial, and government contracts — we specialize in eco-friendly landscaping and construction.
                  </p>
                  <p className="text-hijau-dark/80">
                    Hijau Group is setting new benchmarks for sustainability, quality, and innovation in the landscape industry.
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
