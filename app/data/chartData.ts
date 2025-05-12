// Chart data for Muskat presentation

// Sales by Scent data
export const scentData = [
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
export const productTypeData = [
  { name: "Musk", value: 19578.05, percentage: "35.7%" },
  { name: "Bundle", value: 33369.41, percentage: "60.9%" },
  { name: "Body Mist", value: 1593.01, percentage: "2.9%" },
  { name: "Deodorant", value: 544.87, percentage: "1.0%" },
];

// Comparing current vs proposed structure
export const structureData = [
  { name: "Current", variants: 217 },
  { name: "Proposed", variants: 8 },
];

// Financial Impact data
export const financialData = [
  { name: "New Revenue", value: 33150 },
  { name: "Inventory Savings", value: 6575 },
  { name: "Operational Savings", value: 10000 },
];

// Monthly sales trends
export const monthlySalesData = [
  { name: "Feb", "Cotton Candy": 5107.32, "White Musk": 5876.71 },
  { name: "Mar", "Cotton Candy": 6347.48, "White Musk": 9962.03 },
  { name: "Apr", "Cotton Candy": 5789.78, "White Musk": 9454.27 },
  { name: "May", "Cotton Candy": 1983, "White Musk": 2766.98 },
];

// Solution components
export const solutionComponents = [
  {
    name: "Sensorial Experiences",
    description:
      "Enhanced versions with warming, cooling, or effervescent effects",
    percentage: 25,
  },
  {
    name: "Fragrance Intensity Options",
    description: "Different intensity levels (Soft, Regular, Intense)",
    percentage: 20,
  },
  {
    name: "Seasonal Limited Editions",
    description: "Quarterly releases aligned with seasonal themes",
    percentage: 30,
  },
  {
    name: "Complete Care System",
    description: "Expanded product ecosystem",
    percentage: 25,
  },
];

// Colors
export const COLORS = ["#FB9A9C", "#00B5E2", "#FF5630", "#8A5A44", "#CCCCCC"];
export const PRODUCT_COLORS = ["#36B37E", "#FFAB00", "#FF5630", "#FF8B00"];
export const FINANCIAL_COLORS = ["#36B37E", "#00B8D9", "#6554C0"];
export const SOLUTION_COLORS = ["#ec4899", "#8b5cf6", "#06b6d4", "#10b981"];

// Revenue Loss Analysis Data
export const revenueLossData = [
  {
    name: "MUSK ÍNTIMO",
    currentRevenue: 96737.3,
    potentialRevenue: 105200.0,
    loss: 8462.7,
  },
  {
    name: "Pack descubrimiento",
    currentRevenue: 76782.41,
    potentialRevenue: 82500.0,
    loss: 5717.59,
    englishName: "Discovery Pack",
  },
  {
    name: "2 musks = 3 gratis",
    currentRevenue: 24943.43,
    potentialRevenue: 29800.0,
    loss: 4856.57,
    englishName: "Buy 2 Get 1 Free",
  },
  {
    name: "Algodón de azúcar",
    currentRevenue: 42564.41,
    potentialRevenue: 57300.0,
    loss: 14735.59,
    englishName: "Cotton Candy Line",
  },
  {
    name: "1 + 50% descuento",
    currentRevenue: 13467.56,
    potentialRevenue: 16200.0,
    loss: 2732.44,
    englishName: "Buy 1 Get 50% Off",
  },
];

// Discount Loss Analysis Data
export const discountLossData = [
  {
    name: "1 + 50% descuento",
    spanishName: "1 comprado = el segundo al 50% de descuento",
    englishName: "Buy 1 Get 50% Off",
    regularPrice: 19.99,
    discountedPrice: 14.99,
    units: 1750,
    revenue: 26232.5,
    potentialRevenue: 34982.5,
    discount: 8750.0,
    discountPercentage: 25,
  },
  {
    name: "2 musks = 3 gratis",
    spanishName: "2 musks comprados = 3 musks gratis",
    englishName: "Buy 2 Get 1 Free",
    regularPrice: 20.0,
    discountedPrice: 10.0,
    units: 1608,
    revenue: 48240.0,
    potentialRevenue: 96480.0,
    discount: 48240.0,
    discountPercentage: 50,
  },
  {
    name: "Pack descubrimiento",
    spanishName: "Pack descubrimiento: 2 musks + 1 desodorante + 1 bruma",
    englishName: "Discovery Pack",
    regularPrice: 59.96,
    discountedPrice: 47.96,
    units: 1629,
    revenue: 78127.64,
    potentialRevenue: 97667.04,
    discount: 19539.4,
    discountPercentage: 20,
  },
  {
    name: "Pack de rutina",
    spanishName: "Pack de rutina de frescura completa",
    englishName: "Complete Freshness Pack",
    regularPrice: 49.96,
    discountedPrice: 37.96,
    units: 306,
    revenue: 11615.76,
    potentialRevenue: 15287.76,
    discount: 3672.0,
    discountPercentage: 24,
  },
  {
    name: "Pack Ultimate",
    spanishName: "Pack Ultimate: 3 musk + 2 desodorantes + 2 brumas",
    englishName: "Ultimate Pack",
    regularPrice: 104.9,
    discountedPrice: 84.9,
    units: 56,
    revenue: 4754.4,
    potentialRevenue: 5874.4,
    discount: 1120.0,
    discountPercentage: 19.1,
  },
];

// Top 10 Product Analysis Data
export const top10ProductData = [
  {
    name: "MUSK ÍNTIMO TOTAL",
    spanishName: "MUSK ÍNTIMO | MUSKAT©",
    englishName: "MUSK INTIMATE TOTAL",
    units: 3760,
    revenue: 96737.3,
    avgUnitPrice: 25.73,
    variants: 34,
    activeVariants: 14,
    issues:
      "Multiple overlapping discounts; 34 database entries for a single product line",
    improvement:
      "Consolidate to 2 main variants (Cotton Candy and White Musk)",
  },
  {
    name: "Pack descubrimiento",
    spanishName: "Pack descubrimiento: 2 musks + 1 desodorante + 1 bruma",
    englishName: "Discovery Pack",
    units: 1629,
    revenue: 76782.41,
    avgUnitPrice: 47.13,
    variants: 18,
    activeVariants: 6,
    issues:
      "18 different bundle configurations; Data blindness on scent preferences",
    improvement:
      "Restructure as White Musk and Cotton Candy specific collections",
  },
  {
    name: "2 musks = 3 gratis",
    spanishName: "2 musks comprados = 3 musks gratis",
    englishName: "Buy 2 Get 1 Free",
    units: 536,
    revenue: 24943.43,
    avgUnitPrice: 46.54,
    variants: 12,
    activeVariants: 5,
    issues:
      "50% effective discount severely erodes margins; Unclear which scents customers prefer",
    improvement: "Replace with standardized volume discounts (15/25/35%)",
  },
  {
    name: "ALMIZCLE BLANCO",
    spanishName: "MUSK ÍNTIMO - ALMIZCLE BLANCO",
    englishName: "WHITE MUSK",
    units: 803,
    revenue: 15450.88,
    avgUnitPrice: 19.24,
    variants: 6,
    activeVariants: 4,
    issues:
      "Second most popular scent diluted across 6 variant configurations",
    improvement:
      "Simplify to one main White Musk variant with standardized discounts",
  },
  {
    name: "1 deo = 1 musk 50%",
    spanishName: "1 desodorante comprado = 1 almizcle al 50% de descuento",
    englishName: "Buy 1 Deodorant Get 1 Musk 50% Off",
    units: 423,
    revenue: 13467.56,
    avgUnitPrice: 31.84,
    variants: 8,
    activeVariants: 3,
    issues:
      "Complex promotion that confuses customers; Inconsistent with other discounts",
    improvement: "Replace with standardized White Musk Collection bundle",
  },
  {
    name: "Pack de rutina",
    spanishName: "Pack de rutina de frescura completa",
    englishName: "Complete Freshness Routine Pack",
    units: 306,
    revenue: 11570.98,
    avgUnitPrice: 37.81,
    variants: 9,
    activeVariants: 4,
    issues:
      "Overlaps with other bundles; Inconsistent 24% discount structure",
    improvement:
      "Replace with Ultimate Freshness Pack with 33% standard discount",
  },
  {
    name: "1 bruma = 1 musk 50%",
    spanishName: "1 bruma comprada = 1 musk al 50% de descuento",
    englishName: "Buy 1 Body Mist Get 1 Musk 50% Off",
    units: 277,
    revenue: 10071.83,
    avgUnitPrice: 36.36,
    variants: 12,
    activeVariants: 3,
    issues: "Another inconsistent promotion; 12 variants with only 3 active",
    improvement: "Replace with Mix & Match Trio with 25% standard discount",
  },
  {
    name: "CEREZA",
    spanishName: "MUSK ÍNTIMO - CEREZA",
    englishName: "CHERRY",
    units: 443,
    revenue: 8505.21,
    avgUnitPrice: 19.2,
    variants: 6,
    activeVariants: 2,
    issues:
      "Low-performing scent (6% of total revenue) with 6 database variants",
    improvement: "Phase out completely and focus on top 2 scents",
  },
  {
    name: "MONOÏ",
    spanishName: "MUSK ÍNTIMO - MONOÏ",
    englishName: "MONOI",
    units: 358,
    revenue: 8098.22,
    avgUnitPrice: 22.62,
    variants: 6,
    activeVariants: 2,
    issues:
      "Poorest performing scent (2.7% of revenue) with 6 database variants",
    improvement: "Phase out completely and focus on top 2 scents",
  },
  {
    name: "Pack Ultimate",
    spanishName: "Pack Ultimate: 3 musk + 2 desodorantes + 2 brumas",
    englishName: "Ultimate Pack",
    units: 56,
    revenue: 4732.9,
    avgUnitPrice: 84.52,
    variants: 4,
    activeVariants: 1,
    issues: "Very low volume (56 units) but takes up 4 database variants",
    improvement: "Replace with simplified Ultimate Freshness Pack",
  },
];