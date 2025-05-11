"use client";

import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <h2 className="text-3xl font-bold mb-6 text-pink-400 border-b border-gray-700 pb-3">
      {title}
    </h2>
  );
};

export default SectionHeader;