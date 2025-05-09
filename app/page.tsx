"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const MuskatPresentation = () => {
  // Sales by Scent data
  const scentData = [
    {
      name: "Cotton Candy",
      value: 24164.79,
      percentage: "44.1%",
      color: "#FB9A9C",
    },
    {
      name: "White Musk",
      value: 17274.46,
      percentage: "31.5%",
      color: "#00B5E2",
    },
    { name: "Cherry", value: 3275.38, percentage: "6.0%", color: "#FF5630" },
    { name: "Monoï", value: 1489.66, percentage: "2.7%", color: "#8A5A44" },
    {
      name: "Other/Mixed",
      value: 8584.98,
      percentage: "15.7%",
      color: "#CCCCCC",
    },
  ];

  // Product Type performance
  const productTypeData = [
    { name: "Musk", value: 19578.05, percentage: "35.7%" },
    { name: "Bundle", value: 33369.41, percentage: "60.9%" },
    { name: "Body Mist", value: 1593.01, percentage: "2.9%" },
    { name: "Deodorant", value: 544.87, percentage: "1.0%" },
  ];

  // Comparing current vs proposed structure
  const structureData = [
    { name: "Current", variants: 217 },
    { name: "Proposed", variants: 8 },
  ];

  // Financial Impact data
  const financialData = [
    { name: "New Revenue", value: 33150 },
    { name: "Inventory Savings", value: 6575 },
    { name: "Operational Savings", value: 10000 },
  ];

  // Monthly sales trends
  const monthlySalesData = [
    { name: "Feb", "Cotton Candy": 5107.32, "White Musk": 5876.71 },
    { name: "Mar", "Cotton Candy": 6347.48, "White Musk": 9962.03 },
    { name: "Apr", "Cotton Candy": 5789.78, "White Musk": 9454.27 },
    { name: "May", "Cotton Candy": 1983, "White Musk": 2766.98 },
  ];

  // Solution components
  const solutionComponents = [
    { name: "Sensorial Experiences", description: "Enhanced versions with warming, cooling, or effervescent effects", percentage: 25 },
    { name: "Fragrance Intensity Options", description: "Different intensity levels (Soft, Regular, Intense)", percentage: 20 },
    { name: "Seasonal Limited Editions", description: "Quarterly releases aligned with seasonal themes", percentage: 30 },
    { name: "Complete Care System", description: "Expanded product ecosystem", percentage: 25 },
  ];

  // Colors
  const COLORS = ["#FB9A9C", "#00B5E2", "#FF5630", "#8A5A44", "#CCCCCC"];
  const PRODUCT_COLORS = ["#36B37E", "#FFAB00", "#FF5630", "#FF8B00"];
  const FINANCIAL_COLORS = ["#36B37E", "#00B8D9", "#6554C0"];
  const SOLUTION_COLORS = ["#ec4899", "#8b5cf6", "#06b6d4", "#10b981"];

  return (
    <div className="flex max-w-7xl mx-auto flex-col gap-6 p-8 bg-gray-900 font-sans text-gray-200">
      {/* HEADER SECTION */}
      <div className="">
        <h1 className="text-4xl font-bold text-center mb-4 text-pink-400">
          MUSKAT PRODUCT LINE OPTIMIZATION
        </h1>
        <p className="text-lg text-center mb-4 text-gray-300">
          Data-Driven Strategy | May 2025
        </p>
        <div className="border-t border-gray-700 my-6"></div>
        <p className="text-lg mb-4 text-gray-300 leading-relaxed">
          <strong>Current Situation:</strong> Your Shopify store is operating with an excessive 217 product variants across your fragrance line. This complexity is killing your profitability and preventing growth. Our analysis of your February-May 2025 sales data reveals critical issues requiring immediate action.
        </p>
      </div>

      {/* SECTION 1: CURRENT STATE ANALYSIS */}
      <div className="">
        <h2 className="text-3xl font-bold mb-6 text-pink-400 border-b border-gray-700 pb-3">
          CURRENT BUSINESS STATE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 p-5 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              Revenue Breakdown by Scent
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={scentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percentage }) => `${name}: ${percentage}`}
                  >
                    {scentData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `€${value.toFixed(2)}`} />
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              Revenue by Product Type
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={productTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percentage }) => `${name}: ${percentage}`}
                  >
                    {productTypeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={PRODUCT_COLORS[index % PRODUCT_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `€${value.toFixed(2)}`} />
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4 text-gray-100">
            Product Variant Analysis
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={structureData}
                margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip formatter={(value) => `${value} variants`} />
                <Bar dataKey="variants" fill="#FF5630" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-gray-400">Your data shows 63.6% of variants (138 variants) generate only 20% of revenue. This means you're maintaining 138 separate database entries, fragmenting your sales data.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow mt-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-100">
            Revenue Insights
          </h3>
          <ul className="list-disc pl-8 space-y-3 text-lg">
            <li>
              <strong className="text-pink-400">75.6% of revenue</strong> comes from just two scents (Cotton Candy and White Musk)
            </li>
            <li>
              <strong className="text-pink-400">Bundle offerings</strong> account for 60.9% of total revenue (€33,369.41)
            </li>
            <li>
              <strong className="text-pink-400">Data Blindness:</strong> 15.7% of revenue (€8,584.98) is trapped in an "Other/Mixed" category due to bundle tracking issues
            </li>
            <li>
              <strong className="text-pink-400">Missing Products:</strong> Despite Cotton Candy being your #1 seller (44.1%), you have no Cotton Candy deodorant or body mist products
            </li>
          </ul>
        </div>
      </div>

      {/* SECTION 2: CRITICAL PROBLEMS */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-pink-400 border-b border-gray-700 pb-3">
          THREE CRITICAL PROBLEMS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-3 text-gray-100">
              1. Technical Bloat in Your Shopify Store
            </h3>
            <p className="mb-4 text-lg">
              <strong>Think of it like:</strong> You're maintaining 217 separate product variants when only 79 drive meaningful revenue.
            </p>
            <div className="mt-4 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">
                Why This Matters:
              </h4>
              <ul className="list-disc pl-8 text-lg space-y-2">
                <li>Fragments your sales data across 217 database entries</li>
                <li>Complicates your inventory management</li>
                <li>Makes analytics nearly impossible</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-3 text-gray-100">
              2. Missing Profitable Products
            </h3>
            <p className="mb-4 text-lg">
              <strong>Think of it like:</strong> Despite Cotton Candy being your #1 seller (44.1%), you have no Cotton Candy deodorant or body mist products.
            </p>
            <div className="mt-4 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">
                Why This Matters:
              </h4>
              <ul className="list-disc pl-8 text-lg space-y-2">
                <li>You're losing obvious cross-selling opportunities</li>
                <li>Customers want matching products in their favorite scent</li>
                <li>You're leaving revenue on the table from your top seller</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-3 text-gray-100">
              3. Decision Paralysis
            </h3>
            <p className="mb-4 text-lg">
              <strong>Think of it like:</strong> Your customers face a complicated purchasing process with too many options. Research shows excessive choice decreases purchase likelihood by 48%.
            </p>
            <div className="mt-4 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">
                Why This Matters:
              </h4>
              <ul className="list-disc pl-8 text-lg space-y-2">
                <li>Overwhelmed customers often buy nothing</li>
                <li>Complex configurations drive cart abandonment</li>
                <li>Multiple redundant navigation paths confuse shoppers</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-3 text-gray-100">
              4. Data Blindness
            </h3>
            <p className="mb-4 text-lg">
              <strong>Think of it like:</strong> 15.7% of your revenue (€8,584.98) is trapped in an "Other/Mixed" category because your variant system doesn't properly track which scents sell.
            </p>
            <div className="mt-4 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">
                Why This Matters:
              </h4>
              <ul className="list-disc pl-8 text-lg space-y-2">
                <li>When a customer buys a mixed bundle, you don't know which scents they wanted</li>
                <li>It's like having a cash register button labeled "Misc Items" for 15.7% of your sales</li>
                <li>You can't make data-driven decisions with blind spots this large</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: SOLUTION */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-pink-400 border-b border-gray-700 pb-3">
          THE SOLUTION: RADICAL SIMPLIFICATION
        </h2>

        <div className="bg-gray-700 p-6 rounded-lg shadow mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-100">
            8-Product Core Line Strategy
          </h3>
          <p className="mb-4 text-lg">We propose an 8-product core line that focuses on your proven winners:</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-pink-900 p-3 rounded text-center">
              <p className="font-bold">1. Cotton Candy Musk</p>
            </div>
            <div className="bg-blue-900 p-3 rounded text-center">
              <p className="font-bold">2. White Musk</p>
            </div>
            <div className="bg-pink-900 p-3 rounded text-center">
              <p className="font-bold text-yellow-300">3. NEW: Cotton Candy Deodorant</p>
            </div>
            <div className="bg-blue-900 p-3 rounded text-center">
              <p className="font-bold">4. White Musk Deodorant</p>
            </div>
            <div className="bg-pink-900 p-3 rounded text-center">
              <p className="font-bold text-yellow-300">5. NEW: Cotton Candy Body Mist</p>
            </div>
            <div className="bg-blue-900 p-3 rounded text-center">
              <p className="font-bold">6. White Musk Body Mist</p>
            </div>
            <div className="bg-pink-900 p-3 rounded text-center">
              <p className="font-bold">7. Cotton Candy Collection</p>
            </div>
            <div className="bg-blue-900 p-3 rounded text-center">
              <p className="font-bold">8. White Musk Collection</p>
            </div>
          </div>

          <h4 className="font-bold text-xl mb-3 text-pink-400">Simple Promotion Structure:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="font-medium">Individual Products</p>
              <p className="font-bold">Full Price</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="font-medium">Any 2 Items</p>
              <p className="font-bold text-green-400">15% OFF</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="font-medium">Any 3 Items</p>
              <p className="font-bold text-green-400">25% OFF</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="font-medium">Collection Bundle</p>
              <p className="font-bold text-green-400">33% OFF</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              1. Cuts The Dead Weight
            </h3>
            <p className="mb-3 text-lg">
              Cherry and Monoï make up only 8.7% of your sales while creating massive complexity.
            </p>
            <div className="mt-4 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">
                Why This Works:
              </h4>
              <ul className="list-disc pl-8 text-lg space-y-2">
                <li>Eliminates 138 low-performing product variants</li>
                <li>Focuses inventory and marketing resources on what actually sells</li>
                <li>Reduces waste and increases profitability per SKU</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              2. Eliminates Data Blindness
            </h3>
            <p className="mb-3 text-lg">
              Moving from 217 variants to 8 products gives you crystal-clear visibility into what's driving revenue.
            </p>
            <div className="mt-4 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">
                Why This Works:
              </h4>
              <ul className="list-disc pl-8 text-lg space-y-2">
                <li>Recaptures the 15.7% "Other/Mixed" revenue data that's currently lost</li>
                <li>Makes data analysis and reporting dramatically simpler</li>
                <li>Enables true data-driven decision making</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              3. Fixes Your Missing Products
            </h3>
            <p className="mb-3 text-lg">
              Your top scent (Cotton Candy at 44.1%) has no matching deodorant or body mist. This is leaving money on the table.
            </p>
            <div className="mt-4 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">
                Why This Works:
              </h4>
              <ul className="list-disc pl-8 text-lg space-y-2">
                <li>Creates obvious cross-selling opportunities with your bestseller</li>
                <li>Completes your product families for a cohesive shopping experience</li>
                <li>Increases average order value through complementary products</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              4. Simplifies Operations
            </h3>
            <p className="mb-3 text-lg">
              Your current 217-variant structure creates a technical nightmare for inventory, reporting, and management.
            </p>
            <div className="mt-4 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">
                Why This Works:
              </h4>
              <ul className="list-disc pl-8 text-lg space-y-2">
                <li>Makes inventory management and forecasting dramatically easier</li>
                <li>Simplifies your Shopify store structure and maintenance</li>
                <li>Reduces technical overhead and complexity across your entire business</li>
                <li>Improves customer shopping experience with fewer choices but better options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: EXPECTED RESULTS */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-pink-400 border-b border-gray-700 pb-3">
          PROJECTED BUSINESS IMPACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <div className="inline-flex items-center justify-center p-4 bg-pink-900 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl font-bold mb-3 text-green-400">+€33,150</div>
            <div className="text-xl">Additional Revenue</div>
            <p className="text-gray-400 mt-2">Year 1 Projection</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <div className="inline-flex items-center justify-center p-4 bg-blue-900 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="text-4xl font-bold mb-3 text-blue-400">-€16,575</div>
            <div className="text-xl">Cost Reduction</div>
            <p className="text-gray-400 mt-2">Inventory & Operations</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <div className="inline-flex items-center justify-center p-4 bg-green-900 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-4xl font-bold mb-3 text-pink-400">+€49,725</div>
            <div className="text-xl">Total Profit Impact</div>
            <p className="text-gray-400 mt-2">Year 1 Projection</p>
          </div>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-100">
            Financial Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="p-3">METRIC</th>
                  <th className="p-3">CURRENT</th>
                  <th className="p-3">PROJECTED (YEAR 1)</th>
                  <th className="p-3">IMPROVEMENT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="p-3">Annual Revenue</td>
                  <td className="p-3">€220,000</td>
                  <td className="p-3">€253,150</td>
                  <td className="p-3 text-green-400">+€33,150</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="p-3">Inventory Costs</td>
                  <td className="p-3">€8,750</td>
                  <td className="p-3">€2,175</td>
                  <td className="p-3 text-green-400">-€6,575</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="p-3">Operational Costs</td>
                  <td className="p-3">€22,000</td>
                  <td className="p-3">€12,000</td>
                  <td className="p-3 text-green-400">-€10,000</td>
                </tr>
                <tr className="font-bold text-pink-400">
                  <td className="p-3">TOTAL PROFIT IMPACT</td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3">+€49,725</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 5: IMPLEMENTATION */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-pink-400 border-b border-gray-700 pb-3">
          IMPLEMENTATION ROADMAP
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Month 1</h3>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Launch Cotton Candy Deodorant</li>
              <li>Launch Cotton Candy Body Mist</li>
              <li>Begin phasing out Monoï products</li>
              <li>Consolidate White Musk product page</li>
            </ul>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Month 2</h3>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Launch Collection bundles for both scents</li>
              <li>Replace all BOGO promotions with new discount structure</li>
              <li>Implement volume discount structure (15%/25%/33%)</li>
              <li>Update product photography for remaining lineup</li>
            </ul>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Month 3</h3>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Complete phase-out of Cherry products</li>
              <li>Finalize Shopify store structure with 8 product lineup</li>
              <li>Launch targeted marketing campaign for new structure</li>
              <li>Analyze initial results and optimize</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 6: NEXT STEPS */}
      <div className="bg-gray-900 p-8 border-2 border-pink-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-400 border-b border-pink-800 pb-3">
          NEXT STEPS
        </h2>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <ol className="space-y-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-pink-400 font-bold mr-3">1</div>
              <div>
                <h4 className="font-medium text-xl text-gray-100">Approve the 8-product strategy</h4>
                <p className="text-gray-400 mt-2">Sign off on the core product lineup focusing on Cotton Candy and White Musk.</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-pink-400 font-bold mr-3">2</div>
              <div>
                <h4 className="font-medium text-xl text-gray-100">Green-light Cotton Candy product extensions</h4>
                <p className="text-gray-400 mt-2">Authorize development of Cotton Candy Deodorant and Body Mist products.</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-pink-400 font-bold mr-3">3</div>
              <div>
                <h4 className="font-medium text-xl text-gray-100">Begin phasing out low-performing variants</h4>
                <p className="text-gray-400 mt-2">Start removing the poorest performing 138 variants from your Shopify store.</p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-pink-400 font-bold mr-3">4</div>
              <div>
                <h4 className="font-medium text-xl text-gray-100">Schedule promotional calendar for transition</h4>
                <p className="text-gray-400 mt-2">Plan timeline for moving from current BOGO promotions to new volume-based discounts.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      {/* SECTION 7: DATA APPENDIX */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold mb-6 text-pink-400 border-b border-gray-700 pb-3">
          DATA APPENDIX
        </h2>

        <p className="mb-4 text-lg">This section contains the raw data that supports our analysis and recommendations. Use these tables to verify any metrics presented in this proposal.</p>

        <div className="grid grid-cols-1 gap-8">
          {/* Revenue By Scent - Raw Data */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Revenue Breakdown by Scent</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="p-3">SCENT</th>
                    <th className="p-3">REVENUE</th>
                    <th className="p-3">% OF TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Cotton Candy</td>
                    <td className="p-3">€24,164.79</td>
                    <td className="p-3">44.1%</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">White Musk</td>
                    <td className="p-3">€17,274.46</td>
                    <td className="p-3">31.5%</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Cherry</td>
                    <td className="p-3">€3,275.38</td>
                    <td className="p-3">6.0%</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Monoï</td>
                    <td className="p-3">€1,489.66</td>
                    <td className="p-3">2.7%</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Other/Mixed</td>
                    <td className="p-3">€8,584.98</td>
                    <td className="p-3">15.7%</td>
                  </tr>
                  <tr className="font-bold border-t-2 border-gray-500">
                    <td className="p-3">TOTAL</td>
                    <td className="p-3">€54,789.27</td>
                    <td className="p-3">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Revenue By Product Type - Raw Data */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Revenue by Product Type</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="p-3">PRODUCT TYPE</th>
                    <th className="p-3">REVENUE</th>
                    <th className="p-3">% OF TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Bundles</td>
                    <td className="p-3">€33,369.41</td>
                    <td className="p-3">60.9%</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Musk/Standard</td>
                    <td className="p-3">€19,578.05</td>
                    <td className="p-3">35.7%</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Body Mist</td>
                    <td className="p-3">€1,593.01</td>
                    <td className="p-3">2.9%</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Deodorant</td>
                    <td className="p-3">€544.87</td>
                    <td className="p-3">1.0%</td>
                  </tr>
                  <tr className="font-bold border-t-2 border-gray-500">
                    <td className="p-3">TOTAL</td>
                    <td className="p-3">€54,789.27</td>
                    <td className="p-3">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Top 10 Products - Raw Data */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Top 10 Products by Sales</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="p-3">PRODUCT TITLE</th>
                    <th className="p-3">NET ITEMS SOLD</th>
                    <th className="p-3">NET SALES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">MUSK ÍNTIMO | MUSKAT©</td>
                    <td className="p-3">3760</td>
                    <td className="p-3">€96,737.30</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Pack descubrimiento: 2 musks + 1 desodorante + 1 bruma</td>
                    <td className="p-3">1629</td>
                    <td className="p-3">€76,782.41</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">2 musks comprados = 3 musks gratis</td>
                    <td className="p-3">536</td>
                    <td className="p-3">€24,943.43</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">MUSK ÍNTIMO - ALMIZCLE BLANCO</td>
                    <td className="p-3">803</td>
                    <td className="p-3">€15,450.88</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">1 desodorante comprado = 1 almizcle al 50% de descuento</td>
                    <td className="p-3">423</td>
                    <td className="p-3">€13,467.56</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Pack de rutina de frescura completa</td>
                    <td className="p-3">306</td>
                    <td className="p-3">€11,570.98</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">1 bruma comprada = 1 musk al 50% de descuento</td>
                    <td className="p-3">277</td>
                    <td className="p-3">€10,071.83</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">MUSK ÍNTIMO - CEREZA</td>
                    <td className="p-3">443</td>
                    <td className="p-3">€8,505.21</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">MUSK ÍNTIMO - MONOÏ</td>
                    <td className="p-3">358</td>
                    <td className="p-3">€8,098.22</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Pack Ultimate: 3 musk + 2 desodorantes + 2 brumas</td>
                    <td className="p-3">56</td>
                    <td className="p-3">€4,732.90</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* MUSK ÍNTIMO Product Analysis */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">MUSK ÍNTIMO | MUSKAT© Variant Analysis</h3>
            <p className="mb-4 text-gray-300">This single product line has 34 variants due to the combination of purchase options and scent selections. Each creates a separate SKU in your system.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-3 text-pink-400">Bundle Options (16 Variants)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="p-3">PURCHASE OPTION</th>
                        <th className="p-3">SALES</th>
                        <th className="p-3">% OF TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">1 Musk (Single product)</td>
                        <td className="p-3">€38,227.09</td>
                        <td className="p-3">39.5%</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">1 comprado = el segundo al 50% de descuento</td>
                        <td className="p-3">€16,894.45</td>
                        <td className="p-3">17.5%</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">2 comprados = 1 gratis</td>
                        <td className="p-3">€23,886.26</td>
                        <td className="p-3">24.7%</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Various other promotions</td>
                        <td className="p-3">€17,729.50</td>
                        <td className="p-3">18.3%</td>
                      </tr>
                      <tr className="font-bold border-t-2 border-gray-500">
                        <td className="p-3">TOTAL</td>
                        <td className="p-3">€96,737.30</td>
                        <td className="p-3">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-pink-400">Scent Breakdown (18 Variants)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="p-3">SCENT</th>
                        <th className="p-3">SALES</th>
                        <th className="p-3">% OF TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Cotton Candy (Algodón de azúcar)</td>
                        <td className="p-3">€42,564.41</td>
                        <td className="p-3">44.0%</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">White Musk (Almizcle Blanco)</td>
                        <td className="p-3">€30,469.25</td>
                        <td className="p-3">31.5%</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Cherry (Cereza)</td>
                        <td className="p-3">€5,804.24</td>
                        <td className="p-3">6.0%</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Monoï</td>
                        <td className="p-3">€2,612.91</td>
                        <td className="p-3">2.7%</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Mixed/Multiple Scents</td>
                        <td className="p-3">€15,286.49</td>
                        <td className="p-3">15.8%</td>
                      </tr>
                      <tr className="font-bold border-t-2 border-gray-500">
                        <td className="p-3">TOTAL</td>
                        <td className="p-3">€96,737.30</td>
                        <td className="p-3">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">Key Variant Analysis Insights:</h4>
              <ul className="list-disc pl-8 text-lg space-y-2">
                <li>Each possible combination of bundle and scent creates a separate variant, resulting in 34 SKUs for what should be a simple product line</li>
                <li>The mixed/multiple scent bundles (15.8% of sales) create data tracking issues as you cannot attribute sales to specific scents</li>
                <li>Most of the 34 variants sell in small quantities, creating inventory complications</li>
                <li>The same two scents (Cotton Candy and White Musk) dominate sales across all bundle types</li>
              </ul>
            </div>
          </div>

          {/* Monthly Sales Trends - Raw Data */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Monthly Sales by Top Scents (Feb-May 2025)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-2 text-pink-400">Cotton Candy</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="p-3">MONTH</th>
                        <th className="p-3">SALES</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">February 2025</td>
                        <td className="p-3">€5,107.32</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">March 2025</td>
                        <td className="p-3">€6,347.48</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">April 2025</td>
                        <td className="p-3">€5,789.78</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">May 2025</td>
                        <td className="p-3">€1,983.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2 text-blue-400">White Musk</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="p-3">MONTH</th>
                        <th className="p-3">SALES</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">February 2025</td>
                        <td className="p-3">€5,876.71</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">March 2025</td>
                        <td className="p-3">€9,962.03</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">April 2025</td>
                        <td className="p-3">€9,454.27</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">May 2025</td>
                        <td className="p-3">€2,766.98</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Variant Analysis - Raw Data */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Variant Performance Analysis</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="p-3">PERFORMANCE CATEGORY</th>
                    <th className="p-3">NUMBER OF VARIANTS</th>
                    <th className="p-3">% OF TOTAL VARIANTS</th>
                    <th className="p-3">% OF REVENUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Top Performers</td>
                    <td className="p-3">79</td>
                    <td className="p-3">36.4%</td>
                    <td className="p-3">80.0%</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="p-3">Low Performers</td>
                    <td className="p-3">138</td>
                    <td className="p-3">63.6%</td>
                    <td className="p-3">20.0%</td>
                  </tr>
                  <tr className="font-bold border-t-2 border-gray-500">
                    <td className="p-3">TOTAL</td>
                    <td className="p-3">217</td>
                    <td className="p-3">100%</td>
                    <td className="p-3">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-300">Note: This analysis confirms that 63.6% of your product variants (138 variants) generate only 20% of your revenue, highlighting the opportunity for streamlining your product lineup.</p>
          </div>

          {/* Variant Complexity Analysis */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Variant Complexity Breakdown</h3>
            <p className="mb-4 text-gray-300">Your current approach of creating variants for every possible product configuration creates a technical burden in your Shopify store. Here's how the 217 variants break down:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-3 text-pink-400">Variant Multiplication Effect</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="p-3">PRODUCT LINE</th>
                        <th className="p-3">BASE PRODUCTS</th>
                        <th className="p-3">BUNDLE OPTIONS</th>
                        <th className="p-3">RESULTING VARIANTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">MUSK ÍNTIMO</td>
                        <td className="p-3">4 scents</td>
                        <td className="p-3">× 8.5 options</td>
                        <td className="p-3">= 34 variants</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Bruma (Body Mist)</td>
                        <td className="p-3">6 scents</td>
                        <td className="p-3">× 7 options</td>
                        <td className="p-3">= 42 variants</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Discovery Packs</td>
                        <td className="p-3">4 base types</td>
                        <td className="p-3">× 11 configurations</td>
                        <td className="p-3">= 44 variants</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Other Bundle Types</td>
                        <td className="p-3">11 configurations</td>
                        <td className="p-3">× 8.5 variations</td>
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
                <h4 className="text-xl font-bold mb-3 text-pink-400">Technical Impact of Variant Approach</h4>
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
                        <td className="p-3">Each variant requires its own SKU, inventory tracking, and database record</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Inventory Management</td>
                        <td className="p-3">Must forecast and manage inventory levels for 217 separate variants</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Data Analysis</td>
                        <td className="p-3">Sales data is fragmented across variants, making insight extraction difficult</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Shopify Performance</td>
                        <td className="p-3">High variant count slows down store performance and increases loading times</td>
                      </tr>
                      <tr className="border-b border-gray-600">
                        <td className="p-3">Customer Experience</td>
                        <td className="p-3">Confusing selection process with redundant options and unclear pricing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-gray-800 rounded shadow">
              <h4 className="font-bold text-xl mb-3 text-pink-400">Key Insight:</h4>
              <p className="text-lg">By simplifying to an 8-product core line (2 scents × 4 product types), you can eliminate 209 variants while still serving 75.6% of your current revenue. This radically simplifies your technical infrastructure while focusing on what actually sells.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuskatPresentation;
