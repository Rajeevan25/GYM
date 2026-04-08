"use client";

import { useState } from "react";

export function PublicPlans() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: 3500,
      features: [
        "Single Branch Access",
        "Cardio & Strength Zone",
        "QR Check-in",
      ],
      missing: ["Multi-Branch Access", "Personal Trainer"],
      popular: false,
    },
    {
      name: "Pro",
      price: 6500,
      features: [
        "Multi-Branch Access",
        "All Equipment Zones",
        "Personalized Workout Plan",
        "Locker Facilities",
      ],
      missing: [],
      popular: true,
    },
    {
      name: "Premium",
      price: 12000,
      features: [
        "Everything in Pro",
        "Private Personal Trainer",
        "Nutritional Coaching",
        "Sauna & Recovery Spa",
      ],
      missing: [],
      popular: false,
    },
  ];

  return (
    <section className="no-border-section max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase italic underline underline-offset-4">Invest in your Physics</span>
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black italic mb-4 sm:mb-6">Choose Your <br/><span className="text-primary italic">Strength</span></h2>
        <p className="text-on-surface-variant mt-4 sm:mt-6 text-base sm:text-xl max-w-2xl mx-auto font-body">Transparent tiers designed for every stage of your fitness journey, from casual training to elite performance.</p>
      </div>

      {/* Billing Selector */}
      <div className="flex items-center justify-center gap-6 mb-16 sm:mb-24">
        <button 
          onClick={() => setIsYearly(false)}
          className={`text-sm sm:text-base font-black uppercase tracking-[0.2em] transition-all ${!isYearly ? 'text-primary font-headline italic' : 'text-on-surface-variant/50 hover:text-on-surface-variant'}`}
        >
          Monthly
        </button>
        <button 
          onClick={() => setIsYearly(!isYearly)}
          className="w-16 h-8 bg-surface-container-highest rounded-full p-1 relative border border-white/5 transition-all active:scale-95 flex items-center group"
          aria-label="Toggle Billing Cycle"
        >
          <div className={`w-6 h-6 rounded-full shadow-lg transition-all duration-300 kinetic-gradient ${isYearly ? 'translate-x-8' : 'translate-x-0'}`} />
        </button>
        <div className="relative">
          <button 
            onClick={() => setIsYearly(true)}
            className={`text-sm sm:text-base font-black uppercase tracking-[0.2em] transition-all ${isYearly ? 'text-primary font-headline italic' : 'text-on-surface-variant/50 hover:text-on-surface-variant'}`}
          >
            Yearly
          </button>
          <span className="absolute -top-8 -right-8 bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest animate-pulse whitespace-nowrap">
            Save 10%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 sm:p-8 lg:p-12 rounded-3xl border transition-all duration-300 flex flex-col relative ${
              plan.popular
                ? "bg-surface-container-highest border-primary md:scale-105 shadow-2xl"
                : "bg-surface-container border-outline-variant/10 hover:bg-surface-container-high"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                Most Popular
              </div>
            )}

            <h3 className="text-3xl sm:text-4xl font-black mb-3 sm:mb-4 italic uppercase tracking-tighter">{plan.name}</h3>
            <div className={`flex items-baseline gap-1 mb-8 sm:mb-12 ${plan.popular ? "text-primary" : "text-foreground"}`}>
              <span className="text-xl sm:text-2xl font-black uppercase tracking-tighter opacity-50 italic">Rs.</span>
              <span className="text-5xl sm:text-7xl font-black italic tracking-tighter leading-none">
                {Math.round(isYearly ? plan.price * 0.9 : plan.price).toLocaleString()}
              </span>
              <span className="text-sm sm:text-base text-on-surface-variant font-bold uppercase tracking-widest italic ml-2">/mo</span>
            </div>

            <ul className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 sm:gap-4 text-on-surface-variant group hover:text-foreground transition-colors overflow-hidden">
                  <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest italic truncate">{feature}</span>
                </li>
              ))}
              {plan.missing.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 sm:gap-4 text-on-surface-variant/20 line-through overflow-hidden">
                  <span className="material-symbols-outlined text-xl opacity-30 flex-shrink-0">close</span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest italic truncate">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 sm:py-5 rounded-2xl font-black text-sm sm:text-base uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95 ${
              plan.popular
                ? "kinetic-gradient text-white shadow-primary/20"
                : "bg-surface-container-high border border-outline-variant/30 hover:bg-surface-container-highest"
            }`}>
              {plan.popular ? "Get Started Now" : "Select Plan"}
            </button>
            
            {isYearly && (
               <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest text-center mt-6 italic opacity-50">
                 * Billed annually at Rs. {(Math.round(plan.price * 0.9) * 12).toLocaleString()}
               </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

