"use client";

import React from "react";

interface ProductData {
  name: string;
  spanishName: string;
  englishName: string;
  units: number;
  revenue: number;
  avgUnitPrice: number;
  variants: number;
  activeVariants: number;
  issues: string;
  improvement: string;
}

interface ProductAnalysisProps {
  productData: ProductData[];
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
}

const ProductAnalysis: React.FC<ProductAnalysisProps> = ({
  productData,
  title,
  backgroundColor = "bg-blue-950/30",
  borderColor = "border-blue-800",
  titleColor = "text-blue-400",
}) => {
  const totalUnits = productData.reduce((sum, item) => sum + item.units, 0);
  const totalRevenue = productData.reduce((sum, item) => sum + item.revenue, 0);
  const totalVariants = productData.reduce((sum, item) => sum + item.variants, 0);
  const totalActiveVariants = productData.reduce((sum, item) => sum + item.activeVariants, 0);
  const averagePrice = totalRevenue / totalUnits;

  return (
    <div className={`mt-8 ${backgroundColor} border ${borderColor} p-6 rounded-lg shadow`}>
      <h3 className={`text-2xl font-bold mb-4 ${titleColor}`}>{title}</h3>
      <p className="mb-4 text-lg">
        We analyzed your top products to identify specific issues and optimization opportunities:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {productData.map((item, index) => (
          <div
            key={index}
            className={`bg-gray-800/80 border ${borderColor}/50 rounded-lg overflow-hidden shadow-lg`}
          >
            <div className={`p-4 border-b border-gray-700 ${backgroundColor.replace('/30', '/20')}`}>
              <h4 className={`font-bold text-lg ${titleColor}`}>{item.name}</h4>
              <p className="text-sm text-gray-400">{item.spanishName}</p>
              <p className="text-sm text-gray-300">({item.englishName})</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-900/50 p-2 rounded">
                  <p className="text-xs text-gray-400">Units Sold</p>
                  <p className="font-bold text-white">{item.units}</p>
                </div>
                <div className="bg-gray-900/50 p-2 rounded">
                  <p className="text-xs text-gray-400">Revenue</p>
                  <p className="font-bold text-white">€{item.revenue.toFixed(2)}</p>
                </div>
                <div className="bg-gray-900/50 p-2 rounded">
                  <p className="text-xs text-gray-400">Avg. Price</p>
                  <p className="font-bold text-white">€{item.avgUnitPrice.toFixed(2)}</p>
                </div>
                <div className="bg-gray-900/50 p-2 rounded">
                  <p className="text-xs text-gray-400">Variants</p>
                  <p className="font-bold">
                    <span className="text-red-400">{item.variants}</span>
                    <span className="text-xs text-gray-400">
                      {" "}
                      ({item.activeVariants} active)
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-red-400 font-bold text-sm">Issue:</p>
                <p className="text-sm text-gray-300 mb-2">{item.issues}</p>
                <p className="text-green-400 font-bold text-sm">Solution:</p>
                <p className="text-sm text-gray-300">{item.improvement}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`bg-gray-800/30 border ${borderColor} rounded-lg p-4 mb-4`}>
        <h4 className={`font-bold text-lg ${titleColor} mb-2`}>Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/80 p-3 rounded-lg">
            <p className="text-xs text-gray-400">Total Units</p>
            <p className="font-bold text-xl">{totalUnits}</p>
          </div>
          <div className="bg-gray-800/80 p-3 rounded-lg">
            <p className="text-xs text-gray-400">Total Revenue</p>
            <p className="font-bold text-xl">€{totalRevenue.toFixed(2)}</p>
          </div>
          <div className="bg-gray-800/80 p-3 rounded-lg">
            <p className="text-xs text-gray-400">Average Price</p>
            <p className="font-bold text-xl">€{averagePrice.toFixed(2)}</p>
          </div>
          <div className="bg-gray-800/80 p-3 rounded-lg">
            <p className="text-xs text-gray-400">Total Variants</p>
            <p className="font-bold text-xl">
              <span className="text-red-400">{totalVariants}</span>
              <span className="text-sm text-gray-400">
                {" "}
                ({totalActiveVariants} active)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAnalysis;