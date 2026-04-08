"use client";

import { PublicSupplements } from "@/components/public-site/supplements";
import { useCart } from "@/context/cart-context";

import { useState } from "react";
import { SHOP_PRODUCTS } from "@/lib/shop-data";

export default function PublicShopPage() {
  const [activeCategory, setActiveCategory] = useState("All Fuel");
  const categories = ["All Fuel", "Protein", "Energy", "Recovery", "Performance"];
  const { addItem } = useCart();

  const filteredProducts = SHOP_PRODUCTS.filter(product => {
    if (activeCategory === "All Fuel") return true;
    if (activeCategory === "Protein") return product.category === "Protein";
    if (activeCategory === "Energy") return product.category === "Energy";
    if (activeCategory === "Recovery") return product.category === "Recovery";
    if (activeCategory === "Performance") return ["Fuel", "Power", "Bundle", "Gear"].includes(product.category);
    return true;
  });



  return (
    <div className="pt-24 sm:pt-32">
      <section className="no-border-section max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase italic underline underline-offset-4">Premium Supplement Store</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black italic uppercase tracking-tighter mb-8 sm:mb-12 font-headline leading-none">
          Kinetic <br/><span className="text-primary tracking-normal">Fuel</span>
        </h1>
        <p className="text-on-surface-variant text-base sm:text-xl lg:text-2xl max-w-3xl mx-auto font-body font-medium leading-relaxed">
          High-performance isolates, pre-workouts, and recovery gear curated for elite architects. Exclusive 20% discount applies to all active members.
        </p>
      </section>

      <div className="bg-surface-container-low py-8 sm:py-12 px-4 sm:px-6 overflow-x-auto whitespace-nowrap border-y border-white/5 mb-12 sm:mb-20 scrollbar-hide">
         <div className="max-w-7xl mx-auto flex gap-8 sm:gap-12 items-center justify-start sm:justify-center min-w-max sm:min-w-0">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-black uppercase tracking-[0.3em] font-headline transition-all ${
                  activeCategory === cat ? 'text-primary underline underline-offset-8 decoration-2' : 'text-on-surface-variant hover:text-foreground'
                }`}
              >
                 {cat}
              </button>
            ))}
         </div>
      </div>

      {/* Corporate Product Highlighting Section */}
      <section className="no-border-section max-w-7xl mx-auto py-16 sm:py-24 lg:py-1 px-4 sm:px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  sm:gap-12">
            {filteredProducts.map((item, i) => (

              <div key={i} className="bg-surface-container rounded-3xl p-6 sm:p-10 border border-outline-variant/10 shadow-2xl relative group hover:border-secondary transition-all">
                 <div className="aspect-[4/3] bg-surface-container-high rounded-2xl mb-6 sm:mb-8 relative overflow-hidden flex items-center justify-center p-6 sm:p-12">
                    <img
                       src={item.img}
                       alt={item.name}
                       className="w-full h-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
                    />
                 </div>
                 <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-1">{item.name}</h3>
                 <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest leading-none mb-4 sm:mb-6 italic">{item.brand}</p>
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-container-low p-4 sm:p-6 rounded-2xl border border-white/5">
                    <div className="text-secondary font-black text-xl sm:text-2xl italic tracking-tighter">Rs. {item.price.toLocaleString()}</div>
                    <button 
                      onClick={() => addItem(item)}
                      className="bg-foreground text-background px-6 sm:px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary transition-all active:scale-90 w-full md:w-auto text-center"
                    >
                       Add Protocol
                    </button>
                 </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
