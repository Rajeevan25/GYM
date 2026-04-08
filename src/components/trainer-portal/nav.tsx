"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

export function TrainerNav() {
  const pathname = usePathname();
  const user = getCurrentUser();

  const navItems = [
    { name: "Dashboard", href: "/trainer", icon: "dashboard" },
    { name: "My Classes", href: "/trainer/schedule", icon: "fitness_center" },
    { name: "Attendance", href: "/trainer/attendance", icon: "event_available" },
    { name: "My Members", href: "/trainer/members", icon: "group" },
  ];

  return (
    <>
      <nav className="fixed left-0 top-0 hidden lg:flex flex-col h-screen w-72 bg-surface-container-low border-r border-white/5 z-40 py-10">
        <div className="px-10 mb-16">
          <Link href="/" className="text-3xl font-black italic text-secondary font-headline tracking-tighter uppercase block">
            TRAINER HUB
          </Link>
          <div className="text-[10px] tracking-[0.25em] text-on-surface-variant font-black uppercase mt-1">Elite Architect</div>
        </div>
        
        <div className="flex flex-col gap-2 px-4 flex-grow">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name}
                href={item.href}
                className={`flex items-center gap-5 px-6 py-4 rounded-xl font-headline text-lg font-bold transition-all ${
                  isActive 
                    ? "bg-secondary/10 text-secondary border-r-4 border-secondary shadow-lg shadow-secondary/10" 
                    : "text-on-surface-variant hover:text-foreground hover:bg-surface-container-high"
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                <span className="uppercase tracking-tighter">{item.name}</span>
              </Link>
            );
          })}
        </div>
        
        <div className="px-8 mt-auto pt-8 border-t border-white/5">
          <div className="flex items-center gap-4 p-4 bg-surface-container rounded-2xl border border-white/5">
             <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center overflow-hidden border border-secondary/30">
                <span className="material-symbols-outlined text-secondary">person</span>
             </div>
             <div>
                <p className="text-sm font-black text-foreground uppercase tracking-tighter">{user.name}</p>
                <p className="text-[10px] text-secondary font-black uppercase tracking-widest leading-none">ARCHITECT</p>
                <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest mt-1 italic">
                  {user.assignedBranches?.join(', ')}
                </p>
             </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full lg:hidden bg-surface-container-low border-t border-white/5 px-6 py-4 z-50 flex justify-between items-center shadow-2xl safe-area-bottom">
        {navItems.map((item) => {
           const isActive = pathname === item.href;
           return (
             <Link 
               key={item.name}
               href={item.href}
               className={`flex flex-col items-center gap-1 transition-all ${
                 isActive ? "text-secondary" : "text-on-surface-variant"
               }`}
             >
               <span className={`material-symbols-outlined text-2xl ${isActive ? 'fill-1' : ''}`}>{item.icon}</span>
               <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
             </Link>
           );
        })}
      </nav>
    </>
  );
}
