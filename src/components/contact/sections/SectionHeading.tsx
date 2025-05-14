
import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="relative mb-8">
      <h2 className="heading-medium text-hijau-blue relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-hijau-blue to-hijau-yellow rounded-full"></span>
      </h2>
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-hijau-blue/5 rounded-full -z-10"></div>
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-hijau-yellow/5 rounded-full -z-10"></div>
    </div>
  );
};

export default SectionHeading;
