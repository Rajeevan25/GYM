export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    category: string;
    img: string;
    description: string;
  }
  
  export const SHOP_PRODUCTS: Product[] = [
    {
      id: "gyn-classic",
      name: "GYN Nut Butter (Classic)",
      brand: "Kinetic Fuel",
      price: 3200,
      category: "Fuel",
      img: "/images/shop/shop-gyn-orange.png",
      description: "Creamy, high-protein nut butter formulated for peak athletic performance. Rich in healthy fats and essential minerals."
    },
    {
       id: "kinetic-starter-bundle",
       name: "Kinetic Protocol Bundle",
       brand: "Kinetic Fuel",
       price: 12500,
       category: "Bundle",
       img: "/images/shop/shop-bundle-full.png",
       description: "The complete entry-level stack: includes GYN spread, BCAA pouch, and a high-performance shaker. Everything you need to start the grind."
    },
    {
       id: "gfyne-emerald",
       name: "GFYNE Performance Spread",
       brand: "Apex Forge",
       price: 3800,
       category: "Fuel",
       img: "/images/shop/shop-gfyne-green.png",
       description: "Emerald green performance spread with added electrolyte matrix. Designed for rapid glycogen replenishment."
    },
    {
      id: "gyn-dark-roast",
      name: "GYN Nut Butter (Dark Roast)",
      brand: "Kinetic Fuel",
      price: 3500,
      category: "Fuel",
      img: "/images/shop/shop-gyn-dark.png",
      description: "Intense dark roasted nuts for a deeper flavor profile. Perfect for slow-release energy during endurance sessions."
    },
    {
      id: "build-up-isolate",
      name: "Build-Up Whey Isolate",
      brand: "FuelCore Nutrition",
      price: 8500,
      category: "Protein",
      img: "/images/shop/shop-whey-isolate.png",
      description: "25g of pure protein per scoop. Ultra-filtered isolate for maximum absorption and lean muscle growth."
    },
    {
       id: "kinetic-shaker-pro",
       name: "Kinetic Shaker Pro",
       brand: "Kinetic Gear",
       price: 2800,
       category: "Gear",
       img: "/images/shop/shop-shaker-black.png",
       description: "Matte black leak-proof shaker with neon green kinetic patterns. Engineered for smooth blending."
    },
    {
       id: "pure-bcaa-pouch",
       name: "Pure BCAA Protocol",
       brand: "Apex Forge",
       price: 4500,
       category: "Recovery",
       img: "/images/shop/shop-bcaa-pouch.png",
       description: "Micronized BCAA 2:1:1 ratio. Supports muscle recovery and reduces fatigue during intense training."
    },
    {
       id: "micronized-creatine",
       name: "Micronized Creatine",
       brand: "Kinetic Fuel",
       price: 3800,
       category: "Power",
       img: "/images/shop/shop-creatine-jar.png",
       description: "Pure creatine monohydrate for increased strength, power, and muscle volume."
    },
    {
       id: "energy-igniter-pre",
       name: "Energy Igniter Pre-Workout",
       brand: "Kinetic Fuel",
       price: 5200,
       category: "Energy",
       img: "/images/shop/shop-preworkout-shot.png",
       description: "Explosive energy formula with focus enhancers. Get the edge you need for high-intensity protocols."
    },
    {
       id: "gyn-energy-bars",
       name: "GYN Performance Bars",
       brand: "Kinetic Fuel",
       price: 4800,
       category: "Fuel",
       img: "/images/shop/shop-energy-bars.png",
       description: "Box of 12 protein-packed energy bars. Real nuts, dark chocolate, and zero artificial fillers."
    }
  ];
  
