"use client";

import React from "react";

interface DiscountItem {
  name: string;
  spanishName: string;
  englishName: string;
  regularPrice: number;
  discountedPrice: number;
  units: number;
  revenue: number;
  potentialRevenue: number;
  discount: number;
  discountPercentage: number;
}

interface DiscountAnalysisProps {
  discountData: DiscountItem[];
  title: string;
}

const DiscountAnalysis: React.FC<DiscountAnalysisProps> = ({
  discountData,
  title,
}) => {
  // Calculate totals
  const totalRevenue = discountData.reduce((sum, item) => sum + item.revenue, 0);
  const totalPotentialRevenue = discountData.reduce((sum, item) => sum + item.potentialRevenue, 0);
  const totalDiscount = discountData.reduce((sum, item) => sum + item.discount, 0);
  const totalDiscountPercentage = ((totalDiscount / totalPotentialRevenue) * 100).toFixed(1);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow mt-8">
      <h3 className="text-2xl font-bold mb-4 text-gray-100">{title}</h3>
      
      <p className="mb-6 text-lg">
        Your current discount structure is eroding margins and creating customer confusion.
        Here's a breakdown of your discount impact:
      </p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="p-3">PROMOTION</th>
              <th className="p-3">ENGLISH NAME</th>
              <th className="p-3">UNITS SOLD</th>
              <th className="p-3">REVENUE</th>
              <th className="p-3">DISCOUNT AMOUNT</th>
              <th className="p-3">DISCOUNT %</th>
            </tr>
          </thead>
          <tbody>
            {discountData.map((item, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.englishName}</td>
                <td className="p-3">{item.units}</td>
                <td className="p-3">€{item.revenue.toFixed(2)}</td>
                <td className="p-3 text-red-400">-€{item.discount.toFixed(2)}</td>
                <td className="p-3">{item.discountPercentage}%</td>
              </tr>
            ))}
            <tr className="font-bold bg-gray-700">
              <td className="p-3" colSpan={3}>TOTAL IMPACT:</td>
              <td className="p-3">€{totalRevenue.toFixed(2)}</td>
              <td className="p-3 text-red-400">-€{totalDiscount.toFixed(2)}</td>
              <td className="p-3">{totalDiscountPercentage}%</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-5 bg-gray-700 rounded shadow">
        <h4 className="font-bold text-xl mb-3 text-pink-400">
          Recommendation:
        </h4>
        <p className="text-lg">
          Replace your current complex discount structure with a simple, tiered approach:
          15% off for 2 items, 25% off for 3 items, and 33% off for collections.
          This will increase average order value while reducing decision complexity.
        </p>
      </div>
    </div>
  );
};

export default DiscountAnalysis;