"use client";

import React from "react";

interface KeyFinding {
  text: string;
  highlight?: string;
}

interface ProductSummaryProps {
  title: string;
  keyFindings: KeyFinding[];
  businessImpact: string[];
}

const ProductSummary: React.FC<ProductSummaryProps> = ({
  title,
  keyFindings,
  businessImpact,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow mt-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-100">
        {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-700 p-5 rounded-lg">
          <h4 className="text-xl font-bold mb-3 text-pink-400">Key Findings</h4>
          <ul className="list-disc pl-5 space-y-3">
            {keyFindings.map((finding, index) => (
              <li key={index} className="text-gray-300">
                {finding.highlight ? (
                  <>
                    <strong className="text-pink-400">{finding.highlight}</strong>{" "}
                    {finding.text}
                  </>
                ) : (
                  finding.text
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-700 p-5 rounded-lg">
          <h4 className="text-xl font-bold mb-3 text-pink-400">Business Impact</h4>
          <ul className="list-disc pl-5 space-y-3">
            {businessImpact.map((impact, index) => (
              <li key={index} className="text-gray-300">
                {impact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;