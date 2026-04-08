"use client";

import { useCart } from "@/context/cart-context";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = () => {
    if (!customerName.trim()) {
      toast.error("Please enter your name to proceed.");
      return;
    }

    setIsSubmitting(true);

    const phoneNumber = "94707119443";
    const itemDetails = items
      .map(
        (item) =>
          `• ${item.name} x ${item.quantity} (Rs. ${(
            item.price * item.quantity
          ).toLocaleString()})`
      )
      .join("\n");

    const message = `🚀 *JK GYM - NEW ORDER* 🚀\n\n*Customer Name:* ${customerName}\n\n*Items:*\n${itemDetails}\n\n*Total Order Value:* Rs. ${totalPrice.toLocaleString()}\n\n*Note:* I'd like to confirm this order. Please let me know the pickup/delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Small delay for effect
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      toast.success("Redirecting to WhatsApp...");
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex flex-center flex-col items-center justify-center text-center">
        <div className="mb-8 p-10 bg-surface-container rounded-full border border-white/5">
          <span className="material-symbols-outlined text-8xl text-on-surface-variant/30">shopping_cart_off</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter mb-4 font-headline">Your Cart is <span className="text-primary italic">Empty</span></h1>
        <p className="text-on-surface-variant max-w-md mb-12 text-lg">You haven't added any premium fuel to your protocol yet. Head back to the store to get started.</p>
        <Link 
          href="/shop" 
          className="bg-primary text-primary-foreground px-12 py-5 rounded-xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20"
        >
          Return to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 sm:mb-20 text-center sm:text-left">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 uppercase italic underline underline-offset-4 decoration-primary font-black tracking-[0.2em] text-[10px] text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Checkout Protocol
           </div>
           <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black italic uppercase tracking-tighter font-headline leading-none">
              Review <br/><span className="text-primary tracking-normal">Order</span>
           </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Cart Items List */}
          <div className="lg:col-span-7 space-y-6">
             <AnimatePresence>
                {items.map((item) => (
                   <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-surface-container rounded-3xl p-4 sm:p-6 border border-white/5 flex flex-col sm:flex-row gap-6 items-center group relative overflow-hidden"
                   >
                      <div className="aspect-square w-full sm:w-32 bg-surface-container-high rounded-2xl flex items-center justify-center p-4 relative overflow-hidden">
                         <img src={item.img} alt={item.name} className="w-full h-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      <div className="flex-1 text-center sm:text-left">
                         <h3 className="text-xl sm:text-2xl font-black italic tracking-tighter uppercase mb-1">{item.name}</h3>
                         <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest mb-4 italic">{item.brand}</p>
                         <div className="text-secondary font-black text-xl italic tracking-tighter">Rs. {item.price.toLocaleString()}</div>
                      </div>

                      <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-2xl border border-white/5">
                         <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-foreground hover:bg-white/5 active:scale-90 transition-all"
                         >
                            <span className="material-symbols-outlined">remove</span>
                         </button>
                         <span className="w-8 text-center font-black text-lg italic tracking-tighter">{item.quantity}</span>
                         <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-foreground hover:bg-white/5 active:scale-90 transition-all"
                         >
                            <span className="material-symbols-outlined">add</span>
                         </button>
                      </div>

                      <button 
                        onClick={() => removeItem(item.id)}
                        className="sm:absolute sm:top-4 sm:right-4 p-2 text-on-surface-variant/30 hover:text-error transition-colors"
                      >
                         <span className="material-symbols-outlined">delete</span>
                      </button>
                   </motion.div>
                ))}
             </AnimatePresence>

             <button 
              onClick={clearCart}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant hover:text-error transition-colors flex items-center gap-2 px-6 py-4"
             >
                <span className="material-symbols-outlined text-sm">delete_sweep</span>
                Purge Entire Protocol
             </button>
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-5">
             <div className="sticky top-32 bg-surface-container rounded-[40px] p-8 sm:p-12 border border-primary/20 shadow-[0_0_100px_rgba(142,255,113,0.05)]">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 font-headline">Order <span className="text-primary italic">Summary</span></h2>
                
                {/* Customer Name Input */}
                <div className="mb-10 space-y-4">
                   <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant italic">Protocol Architect Name</label>
                   <input 
                    type="text" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="ENTER YOUR NAME..."
                    className="w-full bg-surface-container-high border-2 border-white/5 rounded-2xl px-6 py-5 text-sm font-black uppercase tracking-widest focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/20"
                   />
                </div>

                <div className="space-y-6 mb-10 border-y border-white/5 py-8">
                   <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="text-xs font-black uppercase tracking-widest italic">Total Items</span>
                      <span className="font-black italic text-lg tracking-tighter">{totalItems} UNITS</span>
                   </div>
                   <div className="flex justify-between items-center text-foreground">
                      <span className="text-xs font-black uppercase tracking-widest italic">Subtotal</span>
                      <span className="font-black italic text-2xl tracking-tighter">Rs. {totalPrice.toLocaleString()}</span>
                   </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  onClick={handleCheckout}
                  className={`w-full kinetic-gradient text-white py-6 rounded-2xl font-black italic tracking-tighter uppercase text-xl sm:text-2xl flex items-center justify-center gap-4 transition-all shadow-2xl active:scale-[0.98] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                >
                   {isSubmitting ? (
                     <span className="material-symbols-outlined animate-spin">sync</span>
                   ) : (
                     <>
                        <span className="material-symbols-outlined text-3xl">send</span>
                        Checkout via WhatsApp
                     </>
                   )}
                </button>
                <p className="text-center mt-6 text-[9px] uppercase tracking-[0.2em] font-black text-on-surface-variant/40 italic">
                   Order details will be sent to +94 70 711 9443
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
