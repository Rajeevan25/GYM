import { getCurrentUser } from "@/lib/auth";
import { BRANCHES } from "@/lib/data";

export default function MemberDashboard() {
  const user = getCurrentUser();
  const homeBranch = BRANCHES.find(b => b.slug === user.homeBranch);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Header Section */}
      <header className="flex flex-col lg:flex-row justify-between lg:items-end gap-3 sm:gap-4">
        <div>
          <p className="text-primary font-black tracking-widest text-xs uppercase mb-2">Member Portal</p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter text-foreground uppercase italic">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{user.name.split(' ')[0]}</span>
          </h2>
        </div>
        <div className="text-left lg:text-right">
          <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
          <p className="text-xl sm:text-2xl font-black font-headline text-foreground tracking-tighter italic">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">

        {/* QR Check-in Card */}
        <div className="lg:col-span-4 bg-surface-container rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group border border-outline-variant/10 shadow-2xl min-h-[320px] sm:min-h-[400px] lg:min-h-[450px]">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-black italic mb-6 sm:mb-8 tracking-tighter uppercase">Fast-Track Entry</h3>
            <div className="bg-white p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 shadow-[0_0_50px_-12px_rgba(142,255,113,0.5)] transform group-hover:scale-105 transition-transform duration-500">
               <img
                 className="w-36 h-36 sm:w-48 sm:h-48"
                 src="/images/qr-code.png"
                 alt="Membership QR"
               />
            </div>
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest leading-relaxed max-w-[200px]">
               Scan this code at the gate for instant access.
            </p>
            <div className="mt-6 sm:mt-8 px-6 py-2 bg-surface-container-high rounded-full border border-primary/20 text-[8px] font-black text-primary tracking-[0.25em] uppercase">
               Active Protocol Identified
            </div>
          </div>
        </div>

        {/* Membership Status Widget */}
        <div className="lg:col-span-8 bg-surface-container-low rounded-3xl p-6 sm:p-10 flex flex-col justify-between border-l-8 border-primary relative overflow-hidden min-h-[320px] sm:min-h-[380px] lg:min-h-[450px]">
           <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -mr-32 -mt-32 blur-[100px] pointer-events-none"></div>

           <div>
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 sm:mb-16">
                 <div>
                    <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-2 block italic">Current Tier Authority</span>
                    <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter uppercase font-headline">GOLD PLAN</h3>
                 </div>
                 <div className="bg-primary text-primary-foreground px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] rounded-sm italic">ACTIVE</div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
                 <div>
                    <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-2">Renewal Point</p>
                    <p className="text-lg sm:text-2xl font-black italic tracking-tighter uppercase">DEC 15, 2023</p>
                 </div>
                 <div>
                    <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-2">Cumulative Visits</p>
                    <p className="text-lg sm:text-2xl font-black italic tracking-tighter uppercase">142 SESSIONS</p>
                 </div>
                 <div className="hidden lg:block">
                    <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-2">Branch HQ</p>
                    <p className="text-2xl font-black italic tracking-tighter uppercase">{homeBranch?.name || "Global"}</p>
                 </div>
              </div>
           </div>

           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button className="kinetic-gradient text-white font-black text-xs px-8 sm:px-10 py-4 sm:py-5 tracking-[0.15em] uppercase rounded-xl hover:scale-[1.02] active:scale-95 transition-all">
                 UPGRADE TIER
              </button>
              <button className="bg-transparent border border-outline-variant/30 text-foreground font-black text-xs px-8 sm:px-10 py-4 sm:py-5 tracking-[0.15em] uppercase rounded-xl hover:bg-white/5 transition-all active:scale-95">
                 MANAGE BILLING
              </button>
           </div>
        </div>

        {/* Upcoming Session / Progress Section */}
        <div className="lg:col-span-7 bg-surface-container-high rounded-3xl overflow-hidden flex flex-col sm:flex-row min-h-[280px] sm:min-h-[350px] border border-outline-variant/10 shadow-2xl">
           <div className="sm:w-1/2 relative min-h-[160px] sm:min-h-[200px]">
              <img
                 className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 contrast-125"
                 src="/images/athlete-session.jpg"
                 alt="Athlete session"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-high"></div>
           </div>
           <div className="sm:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-primary mb-4 sm:mb-6">
                 <span className="material-symbols-outlined text-sm font-black">timer</span>
                 <span className="text-[10px] font-black tracking-[0.2em] uppercase">Starting in 1H 18M</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black italic tracking-tighter leading-[0.85] mb-4 sm:mb-6 uppercase">BODYBUILDING<br/><span className="text-primary tracking-normal">ADVANCED</span></h3>

              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                 <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary/30 flex items-center justify-center overflow-hidden">
                    <img
                       className="w-full h-full object-cover"
                       src="/images/trainer.jpg"
                       alt="Trainer"
                    />
                 </div>
                 <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest leading-none">Instructor: <span className="text-foreground">KUMAR J.</span></p>
              </div>

              <button className="text-primary font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 group hover:italic transition-all">
                 SESSION PROTOCOL
                 <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-2">arrow_forward</span>
              </button>
           </div>
        </div>

        {/* Activity Summary / Simple Logic Bar */}
        <div className="lg:col-span-5 bg-surface-container rounded-3xl p-6 sm:p-10 border border-outline-variant/10 shadow-2xl flex flex-col justify-between min-h-[280px] sm:min-h-[350px]">
           <div className="flex justify-between items-start mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-black italic uppercase tracking-tighter">Velocity Track</h3>
              <span className="material-symbols-outlined text-primary">trending_up</span>
           </div>

           <div className="space-y-3 sm:space-y-4 flex-grow flex flex-col justify-center">
              <div className="flex items-center justify-between">
                 <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Weekly Commitment</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-primary">75% Complete</span>
              </div>
              <div className="h-4 bg-surface-container-high rounded-full overflow-hidden p-1 border border-white/5">
                 <div className="h-full bg-primary rounded-full w-[75%] shadow-[0_0_15px_rgba(142,255,113,0.5)]"></div>
              </div>
              <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.2em] text-on-surface-variant/50 px-1">
                 <span>0 SESSIONS</span>
                 <span>4 SESSIONS TARGET</span>
              </div>
           </div>

           <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-surface-container-low rounded-2xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                 <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl">award</span>
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-widest leading-none">
                    Next PR Milestone: <br/>
                    <span className="text-foreground italic text-xs tracking-tighter">120KG Deadlift</span>
                 </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant/30">chevron_right</span>
           </div>
        </div>

      </div>

      {/* Contextual Action Button (Mobile) */}
      <button className="fixed bottom-24 right-4 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 kinetic-gradient text-white rounded-2xl shadow-2xl shadow-black/80 flex items-center justify-center lg:hidden z-40 active:scale-90 transition-all">
         <span className="material-symbols-outlined text-2xl sm:text-3xl font-black">add</span>
      </button>
    </div>
  );
}
