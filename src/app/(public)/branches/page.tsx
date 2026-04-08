import { BRANCHES } from "@/lib/data";
import Link from "next/link";
import { BranchHero } from "@/components/public-site/branch-hero";

export default function BranchesPage() {
  const getOpenStatus = (hours: { morning: string; evening: string }) => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const parseRange = (range: string) => {
      const [start, end] = range.split(" - ").map((t) => {
        const [time, period] = t.split(" ");
        let [hours, minutes] = time.split(":").map(Number);
        if (period === "PM" && hours !== 12) hours += 12;
        if (period === "AM" && hours === 12) hours = 0;
        return hours * 60 + minutes;
      });
      return { start, end };
    };

    const morning = parseRange(hours.morning);
    const evening = parseRange(hours.evening);

    const isOpen = (currentTime >= morning.start && currentTime <= morning.end) || 
                   (currentTime >= evening.start && currentTime <= evening.end);
    
    return isOpen;
  };

  return (
    <div className="pt-20">
      <BranchHero />

      <section id="branches-list" className="no-border-section max-w-7xl mx-auto pt-4 pb-12 sm:py-20 lg:py-32 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
          {BRANCHES.map((branch) => {
            const isOpen = getOpenStatus(branch.hours);
            return (
              <Link key={branch.slug} href={`/branches/${branch.slug}`} className="group block h-full">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 border border-outline-variant/10 shadow-2xl group-hover:border-primary/50 group-hover:shadow-primary/10 transition-all duration-700">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    src={branch.image}
                    alt={branch.name}
                  />
                  {/* Removed gradient overlay to show exact image */}

                  
                  {/* Tactical Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className={`px-3 py-1 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-2 ${isOpen ? 'bg-primary/20 text-primary' : 'bg-error/20 text-error-container'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? 'bg-primary' : 'bg-error'}`}></span>
                      <span className="text-[8px] font-black uppercase tracking-[0.2em]">{isOpen ? 'Active' : 'Offline'}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-surface/80 backdrop-blur-md border border-outline-variant/20 px-3 py-1 rounded-lg">
                     <p className="text-[8px] font-black uppercase tracking-widest text-on-surface-variant">Unit {branch.slug.split('-').map(s => s[0]).join('').toUpperCase()}</p>
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter group-hover:text-primary transition-colors leading-none">
                      {branch.name}
                    </h3>
                    <span className="material-symbols-outlined text-primary scale-0 group-hover:scale-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">arrow_forward</span>
                  </div>
                  <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4 italic">{branch.tagline}</p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/10">
                    {branch.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <p className="text-[8px] font-black uppercase tracking-widest text-on-surface-variant/60 mb-1">{stat.label}</p>
                        <p className="text-sm font-black italic uppercase tracking-tight">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {branch.specialties.map((s) => (
                      <span key={s} className="bg-surface-container-high px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest border border-outline-variant/10 text-on-surface-variant group-hover:border-primary/30 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
