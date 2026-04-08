"use client";

import { useState } from "react";
import { useCart } from "@/context/cart-context";
import Link from "next/link";
import { SHOP_PRODUCTS } from "@/lib/shop-data";

export default function MemberShopPage() {
  const { addItem, totalItems } = useCart();
  const [activeCategory, setActiveCategory] = useState("All Fuel");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All Fuel", "Protein", "Energy", "Recovery", "Performance"];

  const filteredProducts = SHOP_PRODUCTS.filter(product => {
    // Category Filter
    const matchesCategory = 
      activeCategory === "All Fuel" || 
      (activeCategory === "Protein" && product.category === "Protein") ||
      (activeCategory === "Energy" && product.category === "Energy") ||
      (activeCategory === "Recovery" && product.category === "Recovery") ||
      (activeCategory === "Performance" && ["Fuel", "Power", "Bundle", "Gear"].includes(product.category));

    // Search Filter
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-secondary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Fuel Protocol</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Supplement <br/><span className="text-secondary tracking-normal">Store</span>
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
           <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                type="text"
                placeholder="SEARCH FUEL..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-surface-container-high border-none rounded-xl pl-12 pr-6 py-4 text-xs font-black uppercase tracking-widest focus:ring-secondary/50 placeholder:text-on-surface-variant/30 w-full"
              />
           </div>
           <Link 
            href="/shop/cart"
            className="bg-surface-container-high text-foreground p-4 rounded-xl border border-white/5 relative self-start hover:bg-secondary/10 transition-colors"
           >
              <span className="material-symbols-outlined">shopping_cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground rounded-full text-[8px] font-black flex items-center justify-center">
                  {totalItems}
                </span>
              )}
           </Link>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-2 scrollbar-hide border-b border-white/5">
        {categories.map((cat, i) => (
          <button 
            key={i} 
            onClick={() => setActiveCategory(cat)}
            className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${
              activeCategory === cat ? 'text-secondary border-b-2 border-secondary pb-2' : 'text-on-surface-variant hover:text-foreground pb-2'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {filteredProducts.map((item, i) => (
          <div key={i} className="bg-surface-container p-4 sm:p-6 rounded-3xl border border-outline-variant/10 shadow-2xl relative group hover:-translate-y-2 transition-all">
             <div className="aspect-square bg-surface-container-high rounded-2xl mb-4 sm:mb-6 relative overflow-hidden flex items-center justify-center p-4 sm:p-8">
                <img
                  className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500"
                  src={item.img}
                  alt={item.name}
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-secondary text-secondary-foreground px-2 sm:px-3 py-1 rounded-full text-[7px] sm:text-[8px] font-black uppercase tracking-widest italic shadow-lg">
                   20% Off
                </div>
             </div>

             <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3 sm:mb-4">
                <div>
                   <h3 className="text-base sm:text-xl font-black italic tracking-tighter uppercase mb-1">{item.name}</h3>
                   <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest italic">{item.brand}</p>
                </div>
                <div className="text-left sm:text-right">
                   <p className="text-[10px] text-on-surface-variant line-through font-black italic">Rs. {(item.price / 0.8).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                   <p className="text-base sm:text-xl font-black italic tracking-tighter text-secondary">Rs. {item.price.toLocaleString()}</p>
                </div>
             </div>

             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button className="flex-1 bg-white/5 border border-white/10 text-foreground py-3 sm:py-4 rounded-xl text-[8px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all active:scale-95">
                   Details
                </button>
                <button 
                  onClick={() => addItem(item)}
                  className="flex-1 sm:flex-[2] kinetic-gradient text-white py-3 sm:py-4 rounded-xl text-[8px] font-black uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all"
                >
                   Add Protocol
                </button>
             </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container px-6 sm:px-12 py-10 sm:py-16 rounded-[32px] sm:rounded-[40px] border border-outline-variant/10 relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
            <div className="max-w-xl">
               <h3 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase mb-4 sm:mb-6 leading-none">Custom <span className="text-primary tracking-normal">Bundles</span></h3>
               <p className="text-on-surface-variant text-sm sm:text-base font-medium leading-relaxed font-body mb-6 sm:mb-8">
                  Architect your own recovery stack. Select 3 or more premium supplements and get an additional <span className="text-foreground font-black italic">15% Kinetic Credit</span>.
               </p>
               <button className="bg-foreground text-background px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#064e3b] hover:text-white transition-all shadow-2xl active:scale-95">
                  Build Custom Protocol
               </button>
            </div>
            <div className="w-full md:w-1/3 opacity-20">
               <span className="material-symbols-outlined text-[8rem] sm:text-[10rem]">auto_awesome</span>
            </div>
         </div>
      </div>
    </div>
  );
}
