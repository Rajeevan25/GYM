"use client";

import { BRANCHES, SCHEDULE, ClassSchedule } from "@/lib/data";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Strength", "Cardio", "HIIT", "Recovery", "Conditioning"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function TimetablePage() {
  const [selectedBranch, setSelectedBranch] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDay, setSelectedDay] = useState<string>(DAYS[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const filteredSchedule = useMemo(() => {
    return SCHEDULE.filter((item) => {
      const branchMatch = selectedBranch === "all" || item.branch === selectedBranch;
      const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
      const dayMatch = item.days.includes(selectedDay);
      return branchMatch && categoryMatch && dayMatch;
    });
  }, [selectedBranch, selectedCategory, selectedDay]);

  const isLive = (item: ClassSchedule) => {
    // Simple mock logic for "Live" status based on current day and time string comparison
    const dayMatch = item.days.includes(selectedDay);
    if (!dayMatch) return false;
    
    // In a real app, we'd parse the time properly. Here we'll just check if it's "Today"
    // and highlight a random subset or match against current hour for demo purposes.
    const currentHour = currentTime.getHours();
    const [time, period] = item.time.split(" ");
    const [hour] = time.split(":").map(Number);
    const itemHour24 = period === "PM" && hour !== 12 ? hour + 12 : (period === "AM" && hour === 12 ? 0 : hour);
    
    return currentHour === itemHour24;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#064e3b15,transparent_70%)]"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
               <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase italic">System: Chronos Protocol</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black italic uppercase tracking-tighter mb-8 font-headline leading-[0.8] animate-slide-up">
               Class <br/><span className="text-primary">Registry</span>
            </h1>
            <p className="text-on-surface-variant text-base sm:text-xl lg:text-2xl max-w-2xl mx-auto font-body font-medium leading-relaxed opacity-80">
               Synchronize your biology with the structural timeline of physical evolution.
            </p>
         </div>
         
         {/* Decorative Industrial Elements */}
         <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent"></div>
      </section>

      {/* Control Panel (Filters) */}
      <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-y border-outline-variant/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          {/* Day Selector */}
          <div className="flex items-center justify-between gap-4">
             <div className="flex overflow-x-auto no-scrollbar gap-2 p-1 bg-surface-container rounded-2xl border border-outline-variant/5">
                {DAYS.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-6 py-2.5 rounded-xl text-[10px] font-black transition-all whitespace-nowrap ${
                      selectedDay === day 
                      ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                      : "text-on-surface-variant hover:bg-surface-container-high"
                    }`}
                  >
                    {day.toUpperCase()}
                  </button>
                ))}
             </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Branch Filter */}
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setSelectedBranch("all")}
                className={`px-5 py-2 rounded-lg text-[10px] font-bold tracking-widest border transition-all ${
                  selectedBranch === "all" ? "bg-foreground text-background border-foreground" : "bg-transparent border-outline-variant/20 text-on-surface-variant hover:border-primary"
                }`}
              >
                ALL UNITS
              </button>
              {BRANCHES.map((b) => (
                <button 
                  key={b.slug}
                  onClick={() => setSelectedBranch(b.slug)}
                  className={`px-5 py-2 rounded-lg text-[10px] font-bold tracking-widest border transition-all ${
                    selectedBranch === b.slug ? "bg-foreground text-background border-foreground" : "bg-transparent border-outline-variant/20 text-on-surface-variant hover:border-primary"
                  }`}
                >
                  {b.name.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex overflow-x-auto no-scrollbar gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors whitespace-nowrap ${
                    selectedCategory === cat ? "text-primary underline underline-offset-8 decoration-2" : "text-on-surface-variant/60 hover:text-on-surface"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6">
        {filteredSchedule.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {filteredSchedule.map((item, i) => {
              const live = isLive(item);
              return (
                <div 
                  key={i} 
                  className={`group relative bg-surface-container rounded-[2rem] p-8 sm:p-10 border transition-all duration-500 hover:shadow-[0_20px_50px_rgba(142,255,113,0.1)] flex flex-col justify-between overflow-hidden ${
                    live ? "border-primary shadow-[0_0_30px_rgba(142,255,113,0.15)] scale-[1.02]" : "border-outline-variant/10 hover:border-primary/50"
                  }`}
                >
                  {/* Background Accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-8">
                       <div className="flex flex-col gap-1">
                          <span className={`text-[10px] font-black tracking-widest uppercase italic leading-none ${live ? "text-primary" : "text-on-surface-variant"}`}>
                            {live ? "● SIGNAL ACTIVE" : "SYNCHRONIZED"}
                          </span>
                          <span className="text-3xl font-black font-headline tracking-tighter tabular-nums">
                            {item.time}
                          </span>
                       </div>
                       <div className="px-4 py-2 bg-surface-container-high rounded-full border border-outline-variant/10 text-[10px] font-black italic">
                          {item.duration}
                       </div>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors leading-[0.85]">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-8">
                       <span className="text-[10px] font-black uppercase text-on-surface-variant/60 tracking-widest">INTENSITY</span>
                       <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div 
                              key={level} 
                              className={`w-3 h-1.5 rounded-full transition-all ${
                                level <= item.intensity 
                                ? (item.intensity >= 4 ? "bg-red-500" : "bg-primary") 
                                : "bg-outline-variant/20"
                              }`}
                            ></div>
                          ))}
                       </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                       <span className="px-3 py-1 bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest rounded-md border border-primary/20">
                          {item.category}
                       </span>
                       <Link href={`/branches/${item.branch}`} className="px-3 py-1 bg-surface-container-high text-on-surface-variant/80 text-[9px] font-black uppercase tracking-widest rounded-md border border-outline-variant/10 hover:text-primary hover:border-primary transition-colors">
                          {item.branch.replace("-", " ")}
                       </Link>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-outline-variant/10 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/10">
                           <span className="material-symbols-outlined text-sm text-primary">person</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[9px] font-black text-on-surface-variant/60 uppercase tracking-widest leading-none mb-1">ARCHITECT</span>
                           <span className="text-[11px] font-black uppercase italic tracking-wider">{item.trainer}</span>
                        </div>
                     </div>
                     <button className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all active:scale-90 group/btn">
                        <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">bolt</span>
                     </button>
                  </div>

                  {/* Aesthetic Watermark */}
                  <div className="absolute -bottom-6 -right-6 text-[8rem] font-headline font-black text-primary/5 italic pointer-events-none select-none group-hover:text-primary/10 transition-colors">
                     {item.category.slice(0, 1)}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-40 text-center border-2 border-dashed border-outline-variant/20 rounded-[3rem]">
             <span className="material-symbols-outlined text-6xl text-outline-variant mb-6">leak_remove</span>
             <h3 className="text-3xl font-black italic uppercase italic tracking-tighter mb-4">No Kinetic Matches</h3>
             <p className="text-on-surface-variant font-medium">Reconfigure filters to synchronize with the schedule.</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
         <div className="kinetic-gradient p-12 sm:p-20 rounded-[3rem] text-white text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
               <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter mb-8 font-headline leading-none">
                  Ready to Initiate <br/>Your Evolution?
               </h2>
               <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-12 font-medium">
                  Secure your slot in the next kinetic session. Synchronize today.
               </p>
               <button className="px-12 py-5 bg-zinc-200 text-zinc-900 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-2xl scale-110 active:scale-100">
                  BOOK SESSION NOW
               </button>
            </div>
            
            {/* Animated lines */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 blur-[100px] -ml-32 -mb-32"></div>
         </div>
      </section>
    </div>
  );
}

