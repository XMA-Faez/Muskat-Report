"use client";

import React from "react";

interface HeaderSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold text-center mb-4 text-pink-400 tracking-tight">
        {title}
      </h1>
      <p className="text-xl text-center mb-4 text-gray-300">{subtitle}</p>
      <div className="border-t border-gray-700 my-6"></div>
      <p className="text-lg mb-6 text-gray-300 leading-relaxed mx-auto">
        <strong className="text-pink-400">Current Situation:</strong> {description}
      </p>
    </div>
  );
};

export default HeaderSection;
