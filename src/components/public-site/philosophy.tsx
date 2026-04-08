import { PublicBranches } from "@/components/public-site/branches";

export function PublicPhilosophy() {
  return (
    <div className="bg-surface-container py-32">
      <section className="no-border-section max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase italic underline underline-offset-4">Our Legacy Infrastructure</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black italic uppercase tracking-tighter mb-12 font-headline leading-none">
          Precision <br/><span className="text-primary tracking-widest underline underline-offset-8">Network</span>
        </h1>
        <p className="text-on-surface-variant text-base sm:text-xl lg:text-2xl max-w-3xl mx-auto font-body font-medium leading-relaxed">
          JK GYM isn't just about weight—it's about architecture. We've built a multi-branch ecosystem across Jaffna designed for elite physical transformation. 
          Every square inch is engineered for performance.
        </p>
      </section>

      {/* Corporate Philosophy Section */}
      <section className="bg-surface-container-low py-32 px-6 border-y border-outline-variant/10">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
               <img 
                 className="w-full h-full object-cover rounded-3xl duration-1000 border border-outline-variant/10 " 
                 src="/images/industrial_gym_interior.png" 
                 alt="Facility Architecture"
               />
               <div className="absolute -bottom-8 -right-8 bg-zinc-200 text-zinc-900 p-8 sm:p-12 rounded-3xl shadow-2xl">
                  <div className="text-3xl sm:text-5xl font-black italic tracking-tighter mb-2">100%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest leading-none">Industrial Standard</div>
               </div>
            </div>
            <div>
               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-[0.85]">Designed by <br/><span className="text-primary">Kinetic Experts</span></h2>
               <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-12">
                  Our Jaffna Town flagship serves as the core of our operations, while our Nallur and Kondavil hubs provide specialized equipment for focused athletic prep.
               </p>
               <ul className="space-y-6">
                  {["Acoustically Optimized Zones", "Hospital-Grade Air Filtration", "Biometric Entry Protocols"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-foreground group">
                       <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-125 transition-transform">bolt</span>
                       <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
    </div>
  );
}
