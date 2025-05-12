"use client";

import React from "react";
import { TooltipProvider } from "./components/ui/tooltip";

// Import data
import {
  scentData,
  productTypeData,
  structureData,
  financialData,
  monthlySalesData,
  solutionComponents,
  COLORS,
  PRODUCT_COLORS,
  FINANCIAL_COLORS,
  SOLUTION_COLORS,
  revenueLossData,
  discountLossData,
  top10ProductData,
} from "./data/chartData";

// Import components
import PieChartComponent from "./components/charts/PieChartComponent";
import BarChartComponent from "./components/charts/BarChartComponent";
import HeaderSection from "./components/sections/HeaderSection";
import SectionHeader from "./components/sections/SectionHeader";
import RevenueInsights from "./components/sections/RevenueInsights";
import ProductAnalysis from "./components/sections/ProductAnalysis";
import ProductSummary from "./components/sections/ProductSummary";
import DiscountAnalysis from "./components/sections/DiscountAnalysis";
import CriticalProblems from "./components/sections/CriticalProblems";
import StrategicApproaches from "./components/sections/StrategicApproaches";

const MuskatPresentation = () => {
  // Revenue insights data
  const revenueInsights = [
    {
      highlight: "75.6% of revenue",
      text: "comes from just two scents (Cotton Candy and White Musk)",
    },
    {
      highlight: "Bundle offerings",
      text: "account for 60.9% of total revenue (€33,369.41)",
    },
    {
      highlight: "Data Blindness:",
      text: '15.7% of revenue (€8,584.98) is trapped in an "Other/Mixed" category due to bundle tracking issues',
    },
    {
      highlight: "Missing Products:",
      text: "Despite Cotton Candy being your #1 seller (44.1%), you have no Cotton Candy deodorant or body mist products",
    },
  ];

  // Critical problems data
  const criticalProblems = [
    {
      title: "Technical Bloat in Your Shopify Store",
      analogy:
        "You're maintaining 217 separate product variants when only 79 drive meaningful revenue.",
      why: [
        "Fragments your sales data across 217 database entries",
        "Complicates your inventory management",
        "Makes analytics nearly impossible",
      ],
    },
    {
      title: "Missing Profitable Products",
      analogy:
        "Despite Cotton Candy being your #1 seller (44.1%), you have no Cotton Candy deodorant or body mist products.",
      why: [
        "You're losing obvious cross-selling opportunities",
        "Customers want matching products in their favorite scent",
        "You're leaving revenue on the table from your top seller",
      ],
    },
    {
      title: "Decision Paralysis",
      analogy:
        "Your customers face 217 product options when shopping, overwhelming them and reducing conversions.",
      why: [
        "Confused customers don't convert",
        "Every extra click or decision reduces sales by 7%",
        "Complex product structure leads to support questions",
      ],
    },
  ];

  // Product summary data
  const productSummaryFindings = [
    {
      text: "Your top 10 products have 115 database variants but only 44 active variants are actually selling",
      highlight: "115 database variants",
    },
    {
      text: "62% of your product database entries are not generating meaningful sales",
    },
    {
      text: "Inconsistent promotion structures make inventory forecasting nearly impossible",
    },
    {
      text: "Cherry and Monoï scents have 12 variants but make up only 8.7% of revenue",
    },
  ];

  const businessImpact = [
    "Shopify database bloat slowing down your store's performance",
    "Confusing shopping experience with too many similar options",
    "Impossible to track which scents are actually popular in bundle sales",
    "Excessive inventory costs maintaining low-selling variants",
    "Analytics nightmare with fragmented sales data",
  ];

  // Strategic approaches data
  const strategicApproaches = [
    {
      title: "APPROACH 1: RADICAL SIMPLIFICATION WITH NEW PRODUCTS",
      description: "This approach introduces new Cotton Candy products to complete your lineup:",
      colorClass: "bg-pink-900/20",
      borderColorClass: "border-pink-800",
      titleColorClass: "text-pink-400",
      products: [
        { name: "Cotton Candy Musk" },
        { name: "White Musk" },
        { name: "Cotton Candy Deodorant", isNew: true },
        { name: "White Musk Deodorant" },
        { name: "Cotton Candy Body Mist", isNew: true },
        { name: "White Musk Body Mist" },
        { name: "Cotton Candy Collection" },
        { name: "White Musk Collection" },
      ],
      benefits: [
        "Complete product families for both top-selling scents",
        "Maximizes cross-selling potential with matching products",
        "Addresses the missing products gap in your bestselling scent",
        "Higher potential revenue (+€33,150 vs +€25,500)",
      ],
      financialImpact: "+€33,150",
    },
    {
      title: "APPROACH 2: OPTIMIZATION WITH EXISTING PRODUCTS ONLY",
      description: "This approach uses strategic bundles to maximize your current inventory:",
      colorClass: "bg-blue-900/20",
      borderColorClass: "border-blue-800",
      titleColorClass: "text-blue-400",
      products: [
        { name: "Cotton Candy Musk" },
        { name: "White Musk" },
        { name: "White Musk Deodorant" },
        { name: "White Musk Body Mist" },
        { name: "Bestsellers Duo", description: "Cotton Candy + White Musk" },
        { name: "White Musk Complete Collection", description: "Musk + Deodorant + Body Mist" },
        { name: "Mix & Match Trio", description: "Any 3 products - customer choice" },
        { name: "Ultimate Freshness Pack", description: "2 Musks + 1 Deodorant + 1 Body Mist" },
      ],
      benefits: [
        "Zero product development costs - uses only existing inventory",
        "Faster implementation timeline (weeks vs months)",
        "Lower risk approach with immediate implementation",
        "Still delivers significant profit improvement (+€40,250)",
      ],
      financialImpact: "+€40,250",
    },
  ];

  return (
    <TooltipProvider>
      <div className="bg-gray-950 font-sans text-gray-200">
        <div className="max-w-7xl flex flex-col gap-6 p-8 mt-8 mx-auto bg-gray-900">
          {/* HEADER SECTION */}
          <HeaderSection
            title="MUSKAT PRODUCT LINE OPTIMIZATION"
            subtitle="Data-Driven Strategy | May 2025"
            description="Your Shopify store is operating with an excessive 217 product variants across your fragrance line. This complexity is killing your profitability and preventing growth. Our analysis of your February-May 2025 sales data reveals critical issues requiring immediate action."
          />

          {/* SECTION 1: CURRENT STATE ANALYSIS */}
          <div className="">
            <SectionHeader title="CURRENT BUSINESS STATE" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <PieChartComponent
                data={scentData}
                colors={COLORS}
                title="Revenue Breakdown by Scent"
                tooltipFormatter={(value) => `€${value.toFixed(2)}`}
              />

              <PieChartComponent
                data={productTypeData}
                colors={PRODUCT_COLORS}
                title="Revenue by Product Type"
                tooltipFormatter={(value) => `€${value.toFixed(2)}`}
              />
            </div>

            <BarChartComponent
              data={structureData}
              title="Product Variant Analysis"
              xAxisKey="name"
              dataKeys={["variants"]}
              colors={["#FF5630"]}
              layout="vertical"
              tooltipFormatter={(value) => `${value} variants`}
              description="Your data shows 63.6% of variants (138 variants) generate only 20% of revenue. This means you're maintaining 138 separate database entries, fragmenting your sales data."
            />

            <RevenueInsights insights={revenueInsights} />

            {/* <ProductAnalysis */}
            {/*   productData={top10ProductData} */}
            {/*   title="Top 10 Products Analysis" */}
            {/* /> */}

            <ProductSummary
              title="Key Finding:"
              keyFindings={productSummaryFindings}
              businessImpact={businessImpact}
            />

            <DiscountAnalysis
              discountData={discountLossData}
              title="Discount Loss Analysis"
            />

            {/* Variant Complexity Analysis */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg mt-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-100">
                Variant Complexity Breakdown
              </h3>
              <p className="mb-4 text-gray-300">
                Your current approach of creating variants for every possible
                product configuration creates a technical burden in your Shopify
                store. Here's how the 217 variants break down:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-pink-400">
                    Variant Combinatorial Effect
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="p-3">PRODUCT LINE</th>
                          <th className="p-3">BASE PRODUCTS</th>
                          <th className="p-3">COMBINATION OPTIONS</th>
                          <th className="p-3">RESULTING VARIANTS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-600">
                          <td className="p-3">MUSK ÍNTIMO</td>
                          <td className="p-3">4 scents</td>
                          <td className="p-3">Singles (4) + Doubles (6) + Triples (4)</td>
                          <td className="p-3">= 34 variants</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="p-3">Bruma (Body Mist)</td>
                          <td className="p-3">6 scents</td>
                          <td className="p-3">Singles (6) + Doubles (15) + Triples (20)</td>
                          <td className="p-3">= 42 variants</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="p-3">Discovery Packs</td>
                          <td className="p-3">4 base types</td>
                          <td className="p-3">Multiple combinations across types</td>
                          <td className="p-3">= 44 variants</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="p-3">Other Bundle Types</td>
                          <td className="p-3">11 configurations</td>
                          <td className="p-3">Various combinations of products</td>
                          <td className="p-3">= 97 variants</td>
                        </tr>
                        <tr className="font-bold border-t-2 border-gray-500">
                          <td className="p-3">TOTAL</td>
                          <td className="p-3"></td>
                          <td className="p-3"></td>
                          <td className="p-3">217 variants</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-pink-400">
                    Technical Impact of Variant Approach
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="p-3">ISSUE</th>
                          <th className="p-3">IMPACT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-600">
                          <td className="p-3">Database Entries</td>
                          <td className="p-3">
                            Each variant requires its own SKU, inventory
                            tracking, and database record
                          </td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="p-3">Inventory Management</td>
                          <td className="p-3">
                            Must forecast and manage inventory levels for 217
                            separate variants
                          </td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="p-3">Data Analysis</td>
                          <td className="p-3">
                            Sales data is fragmented across variants, making
                            insight extraction difficult
                          </td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="p-3">Shopify Performance</td>
                          <td className="p-3">
                            High variant count slows down store performance and
                            increases loading times
                          </td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="p-3">Customer Experience</td>
                          <td className="p-3">
                            Confusing selection process with redundant options
                            and unclear pricing
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-5 bg-gray-800 rounded shadow">
                <h4 className="font-bold text-xl mb-3 text-pink-400">
                  Key Insight:
                </h4>
                <p className="text-lg">
                  By simplifying to an 8-product core line (using existing
                  products with strategic bundles), you can eliminate 209
                  variants while still serving 75.6% of your current revenue.
                  This optimizes your operations without requiring immediate new
                  product development, allowing you to focus on what already
                  sells well.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 2: CRITICAL PROBLEMS */}
          <CriticalProblems problems={criticalProblems} />

          {/* SECTION 3: SOLUTION */}
          <div className="">
            <SectionHeader title="RECOMMENDED SOLUTION" />

            {/* Strategic Approaches section */}
            <StrategicApproaches
              approaches={strategicApproaches}
              recommendationText="We recommend a phased implementation:"
            />

            {/* Simple Promotion Structure */}
            <div className="bg-gray-800 p-6 rounded-lg shadow mt-8">
              <h4 className="font-bold text-xl mb-3 text-pink-400">
                Simple Promotion Structure:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-gray-700 p-3 rounded text-center">
                  <p className="font-medium">Individual Products</p>
                  <p className="font-bold">Full Price</p>
                </div>
                <div className="bg-gray-700 p-3 rounded text-center">
                  <p className="font-medium">Any 2 Items</p>
                  <p className="font-bold text-green-400">15% OFF</p>
                </div>
                <div className="bg-gray-700 p-3 rounded text-center">
                  <p className="font-medium">Any 3 Items</p>
                  <p className="font-bold text-green-400">25% OFF</p>
                </div>
                <div className="bg-gray-700 p-3 rounded text-center">
                  <p className="font-medium">Collection Bundle</p>
                  <p className="font-bold text-green-400">33% OFF</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: RAW DATA */}
          <div className="">
            <SectionHeader title="RAW SALES DATA" />

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8 overflow-x-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-100">
                Total Sales by Product (May 2024 - May 2025)
              </h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="p-3">Product Title</th>
                    <th className="p-3">Net Items Sold</th>
                    <th className="p-3">Gross Sales (€)</th>
                    <th className="p-3">Discounts (€)</th>
                    <th className="p-3">Net Sales (€)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">MUSK ÍNTIMO | MUSKAT©</td>
                    <td className="p-3">3,760</td>
                    <td className="p-3">105,114.65</td>
                    <td className="p-3">-7,414.40</td>
                    <td className="p-3">96,737.30</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Pack descubrimiento: 2 musks + 1 desodorante + 1 bruma</td>
                    <td className="p-3">1,629</td>
                    <td className="p-3">84,825.40</td>
                    <td className="p-3">-7,260.54</td>
                    <td className="p-3">76,782.41</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">2 musks comprados = 3 musks gratis</td>
                    <td className="p-3">536</td>
                    <td className="p-3">26,836.20</td>
                    <td className="p-3">-1,802.95</td>
                    <td className="p-3">24,943.43</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">MUSK ÍNTIMO - ALMIZCLE BLANCO</td>
                    <td className="p-3">803</td>
                    <td className="p-3">16,738.50</td>
                    <td className="p-3">-1,047.26</td>
                    <td className="p-3">15,450.88</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">1 desodorante comprado = 1 almizcle al 50% de descuento</td>
                    <td className="p-3">423</td>
                    <td className="p-3">14,610.50</td>
                    <td className="p-3">-1,113.04</td>
                    <td className="p-3">13,467.56</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Pack de rutina de frescura completa : 1 musk + 1 bruma + 1 desodorante</td>
                    <td className="p-3">306</td>
                    <td className="p-3">12,289.20</td>
                    <td className="p-3">-638.42</td>
                    <td className="p-3">11,570.98</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">1 bruma comprada = 1 musk al 50% de descuento</td>
                    <td className="p-3">277</td>
                    <td className="p-3">11,109.80</td>
                    <td className="p-3">-887.71</td>
                    <td className="p-3">10,071.83</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">MUSK ÍNTIMO - CEREZA</td>
                    <td className="p-3">443</td>
                    <td className="p-3">9,125.50</td>
                    <td className="p-3">-582.48</td>
                    <td className="p-3">8,505.21</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">MUSK ÍNTIMO - MONOÏ</td>
                    <td className="p-3">358</td>
                    <td className="p-3">8,853.70</td>
                    <td className="p-3">-665.93</td>
                    <td className="p-3">8,098.22</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Pack Ultimate: 3 musk + 2 desodorantes + 2 brumas</td>
                    <td className="p-3">56</td>
                    <td className="p-3">5,194.40</td>
                    <td className="p-3">-461.50</td>
                    <td className="p-3">4,732.90</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-6">
                <h4 className="text-xl font-bold mb-3 text-pink-400">
                  Monthly Sales (February - May 2025)
                </h4>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="p-3">Month</th>
                      <th className="p-3">Sales (€)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-600">
                      <td className="p-3">February 2025</td>
                      <td className="p-3">11,057.20</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="p-3">March 2025</td>
                      <td className="p-3">15,338.00</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="p-3">April 2025</td>
                      <td className="p-3">14,744.50</td>
                    </tr>
                    <tr className="border-b border-gray-600">
                      <td className="p-3">May 2025</td>
                      <td className="p-3">4,629.40</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MuskatPresentation;

