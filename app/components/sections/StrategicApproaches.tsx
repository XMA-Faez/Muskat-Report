"use client";

import React from "react";

interface Product {
  name: string;
  isNew?: boolean;
  description?: string;
}

interface Approach {
  title: string;
  description: string;
  products: Product[];
  benefits: string[];
  colorClass: string;
  borderColorClass: string;
  titleColorClass: string;
  financialImpact?: string;
}

interface StrategicApproachesProps {
  approaches: Approach[];
  recommendationText?: string;
}

const StrategicApproaches: React.FC<StrategicApproachesProps> = ({
  approaches,
  recommendationText,
}) => {
  return (
    <div>
      <div className="space-y-8">
        {approaches.map((approach, index) => (
          <div
            key={index}
            className={`${approach.colorClass} p-6 rounded-lg shadow mb-8 border ${approach.borderColorClass}`}
          >
            <h3 className={`text-2xl font-bold mb-4 ${approach.titleColorClass}`}>
              {approach.title}
            </h3>
            <p className="mb-4 text-lg">{approach.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {approach.products.map((product, idx) => (
                <div 
                  key={idx}
                  className={`${
                    product.name.includes("Cotton Candy") 
                      ? "bg-pink-900" 
                      : product.name.includes("White Musk") 
                        ? "bg-blue-900" 
                        : "bg-gray-700"
                  } p-3 rounded text-center`}
                >
                  <p className="font-bold">
                    {idx + 1}. {product.isNew && (
                      <span className="text-yellow-300">NEW: </span>
                    )}
                    {product.name}
                  </p>
                  {product.description && (
                    <p className="text-xs text-gray-300">
                      ({product.description})
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className={`text-xl font-bold mb-2 ${approach.titleColorClass}`}>
                Key Benefits:
              </h4>
              <ul className="list-disc pl-8 text-lg space-y-1">
                {approach.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {recommendationText && (
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-100">
            RECOMMENDED APPROACH
          </h3>
          <p className="mb-4 text-lg">
            {recommendationText}
          </p>
          <ol className="list-decimal pl-8 space-y-4 text-lg">
            <li>
              <strong className="text-blue-400">
                Phase 1 (Immediate):
              </strong>{" "}
              Implement Approach 2 using existing products to streamline
              operations and improve profitability without delay
            </li>
            <li>
              <strong className="text-pink-400">
                Phase 2 (Months 4-6):
              </strong>{" "}
              Begin development of Cotton Candy Deodorant and Body Mist
              based on the performance data from your new bundle strategy
            </li>
          </ol>
          <p className="mt-4 text-lg">
            This gives you the best of both worlds: immediate improvement
            with a clear path toward completing your product lineup.
          </p>
        </div>
      )}
    </div>
  );
};

export default StrategicApproaches;
