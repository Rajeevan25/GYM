import { BRANCHES, TRAINERS, SCHEDULE } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function BranchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = BRANCHES.find((b) => b.slug === slug);

  if (!branch) {
    notFound();
  }

  const branchTrainers = TRAINERS.filter((t) => t.branches.includes(branch.slug));
  const branchSchedule = SCHEDULE.filter((s) => s.branch === branch.slug);

  return (
    <div className="pt-24 sm:pt-32 min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="no-border-section max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 text-center relative">
        {/* Back Button */}
        <div className="absolute top-0 left-0 z-40">
          <Link 
            href="/branches" 
            className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-surface-container/80 backdrop-blur-xl border border-outline-variant/20 hover:border-primary/50 transition-all hover:scale-110 active:scale-95 shadow-2xl"
          >
            <span className="material-symbols-outlined text-primary group-hover:-translate-x-1 transition-transform">arrow_back</span>
          </Link>
        </div>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 -top-24 -z-10 bg-[linear-gradient(to_right,#0c1a16_1px,transparent_1px),linear-gradient(to_bottom,#0c1a16_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase italic">{branch.tagline || 'Strategic Node'}</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black italic uppercase tracking-tighter mb-8 sm:mb-12 font-headline leading-[0.8] mix-blend-screen">
          {branch.name} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/50 to-secondary tracking-[0.2em] font-headline text-3xl sm:text-5xl md:text-6xl">DEPLOYMENT</span>
        </h1>
        
        <p className="text-on-surface-variant text-base sm:text-xl lg:text-2xl max-w-4xl mx-auto font-body font-medium leading-relaxed italic opacity-80">
          {branch.description}
        </p>

        {/* Tactical Badge Overlay */}
        <div className="mt-12 flex justify-center gap-8 items-center flex-wrap">
          {branch.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-2">{stat.label}</p>
              <div className="px-6 py-3 bg-surface-container/50 backdrop-blur-xl border border-outline-variant/10 rounded-2xl">
                 <p className="text-2xl font-black italic uppercase tracking-tighter text-on-surface">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="no-border-section max-w-7xl mx-auto py-12 sm:py-20 lg:py-32 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-24">
          
          {/* Left Column: Intelligence & Contacts */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            
            {/* Opening Protocol */}
            <div className="bg-surface-container rounded-[2.5rem] p-8 sm:p-12 border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                Opening Protocol
              </h3>
              <div className="space-y-10 relative z-10">
                <div className="group/item">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/50 mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-primary/30"></span> 01 Morning Phase
                  </p>
                  <p className="text-3xl font-black italic uppercase tracking-tighter group-hover/item:text-primary transition-colors">{branch.hours.morning}</p>
                </div>
                <div className="pt-10 border-t border-outline-variant/10 group/item">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/50 mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-primary/30"></span> 02 Evening Phase
                  </p>
                  <p className="text-3xl font-black italic uppercase tracking-tighter group-hover/item:text-primary transition-colors">{branch.hours.evening}</p>
                </div>
              </div>
            </div>

            {/* Tactical Communications */}
            <div className="bg-surface-container-low rounded-[2.5rem] p-8 sm:p-12 border border-outline-variant/10 flex flex-col gap-10 shadow-xl overflow-hidden relative">
               <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
               <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40 mb-3">Priority Hotline</h3>
                  <p className="text-3xl font-black italic tracking-tighter text-primary">{branch.phone}</p>
               </div>
               <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40 mb-3">Node Coordinates</h3>
                  <p className="text-on-surface-variant uppercase text-xs font-black tracking-widest leading-relaxed italic">{branch.address}</p>
               </div>
               
               {/* Enhanced Map Visual */}
               <div className="bg-surface-container-high aspect-square rounded-3xl border border-outline-variant/20 flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,78,59,0.1)_100%)]"></div>
                  {/* Radar Circles */}
                  <div className="absolute w-48 h-48 border border-primary/10 rounded-full animate-[ping_3s_infinite]"></div>
                  <div className="absolute w-32 h-32 border border-primary/20 rounded-full animate-[ping_4s_infinite]"></div>
                  
                  <span className="material-symbols-outlined text-6xl text-primary group-hover:scale-125 transition-all duration-700 relative z-10">radar</span>
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors"></div>
                  
                  <div className="mt-6 text-center relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Scanning Node...</p>
                    <p className="text-[8px] font-medium text-on-surface-variant/60 mt-1 uppercase tracking-widest">Interactive Grid Offline</p>
                  </div>
               </div>

               <button className="w-full py-6 bg-primary text-on-primary font-black italic uppercase tracking-[.25em] text-xs rounded-2xl hover:bg-primary/90 transition-all active:scale-[0.98] shadow-xl shadow-primary/20">
                  Commence Training
               </button>
            </div>
          </div>

          {/* Right Column: Local Ecosystem */}
          <div className="lg:col-span-8 flex flex-col gap-24">
            
            {/* Facility Arsenal */}
            <div>
              <div className="flex items-center gap-6 mb-16">
                 <h2 className="text-5xl sm:text-6xl font-black italic uppercase tracking-tighter">Facility Arsenal</h2>
                 <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {branch.facilities.map((facility, i) => (
                  <div key={i} className="group bg-surface-container rounded-3xl p-8 border border-outline-variant/10 hover:border-primary/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all">
                      <span className="material-symbols-outlined text-8xl">{facility.icon}</span>
                    </div>
                    <div className="flex gap-6 items-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                        <span className="material-symbols-outlined text-3xl font-black">{facility.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-black italic uppercase tracking-tighter mb-1">{facility.name}</h4>
                        <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 italic">Standard Deployment</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Schedule */}
            <div>
              <div className="flex items-center gap-6 mb-16">
                 <h2 className="text-5xl sm:text-6xl font-black italic uppercase tracking-tighter">Engagement Schedule</h2>
                 <div className="h-[2px] flex-grow bg-gradient-to-r from-secondary/30 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {branchSchedule.length > 0 ? (
                  branchSchedule.map((item, i) => (
                    <div key={i} className="bg-surface-container rounded-3xl p-8 border border-outline-variant/10 hover:border-secondary/50 transition-all shadow-2xl group">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <p className="text-2xl font-black italic uppercase tracking-tighter mb-2 group-hover:text-secondary transition-colors">{item.name}</p>
                          <div className="flex flex-wrap gap-2">
                             {item.days.map((day) => (
                               <span key={day} className="px-2 py-0.5 bg-secondary/10 text-secondary text-[8px] font-black uppercase tracking-widest rounded-md border border-secondary/20">{day}</span>
                             ))}
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/20 shadow-inner">
                           <span className="text-secondary text-[10px] font-black uppercase tracking-widest">{item.time}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                        <div className="w-10 h-10 rounded-full overflow-hidden transition-all border border-outline-variant/20">
                           {/* Finding trainer image from TRAINERS array */}
                           <img src={TRAINERS.find(t => t.name === item.trainer)?.image || "/images/avatar.jpg"} alt={item.trainer} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 mb-0.5 whitespace-nowrap">Active Personnel</p>
                          <p className="text-xs font-black uppercase tracking-widest italic text-on-surface">{item.trainer}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center bg-surface-container-low rounded-3xl border border-dashed border-outline-variant/20">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant/20 mb-4 block">event_busy</span>
                    <p className="text-on-surface-variant/40 italic font-black uppercase tracking-widest text-xs">No active engagements scheduled for this node.</p>
                  </div>
                )}
              </div>
              <div className="mt-16 text-center">
                <Link href="/timetable" className="inline-flex items-center gap-3 px-8 py-4 bg-surface-container-high border border-outline-variant/20 rounded-2xl text-[10px] font-black uppercase tracking-[.3em] italic hover:border-secondary/50 hover:bg-secondary/5 transition-all">
                  Access Global Timetable
                  <span className="material-symbols-outlined text-secondary translate-y-[1px]">hub</span>
                </Link>
              </div>
            </div>

            {/* Active Personnel */}
            <div className="pt-24 border-t border-outline-variant/10">
               <div className="flex items-center gap-6 mb-16">
                  <h2 className="text-5xl sm:text-6xl font-black italic uppercase tracking-tighter">Active Personnel</h2>
                  <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/30 to-transparent"></div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {branchTrainers.map((trainer) => (
                    <Link href={`/trainers`} key={trainer.name} className="flex gap-8 items-center bg-surface-container-low p-8 rounded-[2rem] group border border-outline-variant/10 hover:border-primary transition-all shadow-xl hover:shadow-primary/5">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden transition-all shadow-2xl flex-shrink-0 border-2 border-transparent group-hover:border-primary/50 rotate-3 group-hover:rotate-0">
                        <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-1 group-hover:text-primary transition-colors">{trainer.name}</h4>
                        <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4 italic leading-none">{trainer.role}</p>
                        <div className="h-[1px] w-12 bg-outline-variant/20 mb-4 group-hover:w-full transition-all duration-700"></div>
                        <p className="text-on-surface-variant text-[10px] font-bold leading-relaxed italic uppercase tracking-widest">{trainer.specialty}</p>
                      </div>
                    </Link>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
