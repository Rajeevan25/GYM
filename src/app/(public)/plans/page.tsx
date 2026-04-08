import { PublicPlans } from "@/components/public-site/plans";

export default function PlansPage() {
  return (
    <div className="pt-4 sm:pt-8">
      {/* <section className="no-border-section max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase italic underline underline-offset-4">Invest in your Physics</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black italic uppercase tracking-tighter mb-8 sm:mb-12 font-headline leading-none">
          Kinetic <br/><span className="text-primary tracking-normal">Tiers</span>
        </h1>
        <p className="text-on-surface-variant text-base sm:text-xl lg:text-2xl max-w-3xl mx-auto font-body font-medium leading-relaxed">
          Select your level of intensity. We offer flexible tiers designed for casual explorers and elite architects alike. No long-term commitments, just results.
        </p>
      </section> */}

      <PublicPlans />

      {/* Comparison Matrix (Advanced Section) */}
      <section className="bg-surface-container-low py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter mb-10 sm:mb-20 text-center">Protocol Comparison Matrix</h2>
            <div className="space-y-3 sm:space-y-4">
               {[
                 { feature: "Full Access 24/7", basic: true, pro: true, premium: true },
                 { feature: "Bio-metric Entry", basic: true, pro: true, premium: true },
                 { feature: "Multi-branch Roaming", basic: false, pro: true, premium: true },
                 { feature: "Personal Trainer Sessions", basic: false, pro: "2/mo", premium: "Unlimited" },
                 { feature: "Locker & Shower Access", basic: "Shared", pro: "Priority", premium: "Private" },
                 { feature: "Supplements Discount", basic: "0%", pro: "10%", premium: "20%" },
               ].map((item, i) => (
                 <div key={i} className="grid grid-cols-4 gap-2 sm:gap-4 p-4 sm:p-6 bg-surface-container rounded-xl items-center border border-white/5">
                    <span className="col-span-1 text-[10px] sm:text-xs font-black uppercase tracking-widest text-on-surface-variant">{item.feature}</span>
                    <span className="text-center text-[10px] font-black uppercase text-foreground">{item.basic === true ? '✅' : item.basic === false ? '❌' : item.basic}</span>
                    <span className="text-center text-[10px] font-black uppercase text-[#064e3b] font-bold italic tracking-tighter">{item.pro === true ? '✅' : item.pro === false ? '❌' : item.pro}</span>
                    <span className="text-center text-[10px] font-black uppercase text-primary font-bold italic tracking-tighter">{item.premium === true ? '✅' : item.premium === false ? '❌' : item.premium}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
