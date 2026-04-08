"use client";

import { useState } from "react";
import { getCurrentUser } from "@/lib/auth";
import { SCHEDULE, BRANCHES } from "@/lib/data";

export default function MemberSchedulePage() {
  const user = getCurrentUser();
  const [selectedBranch, setSelectedBranch] = useState(user.homeBranch || BRANCHES[0].slug);

  const filteredSchedule = SCHEDULE.filter(item => item.branch === selectedBranch);

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-primary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Athlete Schedule</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Session <br/><span className="text-primary tracking-normal">Matrix</span>
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <div className="flex bg-surface-container rounded-xl p-1 border border-white/5 w-fit">
             {BRANCHES.map(branch => (
               <button 
                 key={branch.slug}
                 onClick={() => setSelectedBranch(branch.slug)}
                 className={`px-4 sm:px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest italic transition-all ${
                   selectedBranch === branch.slug 
                   ? "bg-primary text-primary-foreground shadow-lg" 
                   : "text-on-surface-variant hover:text-foreground"
                 }`}
               >
                 {branch.name.split(' ')[0]}
               </button>
             ))}
          </div>
          <div className="flex bg-surface-container rounded-xl p-1 border border-white/5 w-fit">
             <button className="bg-surface-container-highest text-foreground px-5 sm:px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest italic">Today</button>
             <button className="text-on-surface-variant px-5 sm:px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:text-foreground">Weekly</button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {filteredSchedule.length > 0 ? (
          filteredSchedule.map((item, i) => (
            <div
              key={i}
              className="p-5 sm:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-8 border transition-all bg-surface-container border-outline-variant/10 hover:bg-surface-container-high"
            >
              <div className="flex items-center gap-4 sm:gap-8 w-full md:w-auto">
                 <div className="text-xl sm:text-3xl font-black italic tracking-tighter uppercase font-headline w-24 sm:w-32 flex-shrink-0">{item.time}</div>
                 <div className="h-10 w-0.5 bg-outline-variant/20 hidden md:block flex-shrink-0"></div>
                 <div>
                    <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter">{item.name}</h3>
                    <div className="flex flex-col gap-1 mt-1">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                         <span className="material-symbols-outlined text-sm">person</span>
                         <span className="text-[10px] font-black uppercase tracking-widest leading-none">{item.trainer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary/60">
                         <span className="material-symbols-outlined text-sm">location_on</span>
                         <span className="text-[10px] font-black uppercase tracking-widest leading-none">{BRANCHES.find(b => b.slug === item.branch)?.name}</span>
                      </div>
                    </div>
                 </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
                 <div className="flex flex-wrap gap-2 sm:gap-4">
                    <div className="bg-surface-container-high px-3 sm:px-4 py-2 rounded-lg border border-white/5 text-[8px] font-black uppercase tracking-widest text-on-surface-variant">
                       DAYS: <span className="text-foreground">{item.days.join(', ')}</span>
                    </div>
                 </div>

                 <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl bg-primary text-primary-foreground hover:scale-105 active:scale-95">
                    BOOK SLOT
                 </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center bg-surface-container rounded-3xl border border-dashed border-outline-variant/20">
            <p className="text-on-surface-variant font-black uppercase tracking-widest">No sessions scheduled for this architecture.</p>
          </div>
        )}
      </div>

      <div className="bg-surface-container-low p-6 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-10 opacity-5">
            <span className="material-symbols-outlined text-[8rem] text-primary">event_note</span>
         </div>
         <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter mb-3 sm:mb-4">Personal PT Session?</h3>
            <p className="text-on-surface-variant text-sm font-medium leading-relaxed font-body mb-6 sm:mb-8">
               Architect a private session with our elite trainers for deep-tissue transformation or competitive prep.
            </p>
            <button className="kinetic-gradient text-primary-foreground px-8 sm:px-10 py-4 font-black rounded-xl text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20">
               REQUEST PRIVATE ARCHITECT
            </button>
         </div>
      </div>
    </div>
  );
}
