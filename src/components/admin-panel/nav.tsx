"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCurrentUser } from "@/lib/auth";
import { BRANCHES } from "@/lib/data";

export function AdminNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeBranch, setActiveBranch] = useState("all");
  
  const user = getCurrentUser();
  const isSuperAdmin = user.role === 'SUPER_ADMIN';
  const isBranchAdmin = user.role === 'BRANCH_ADMIN';

  const navItems = [
    { name: "Overview", href: "/admin", icon: "dashboard" },
    { name: "Members", href: "/admin/members", icon: "group" },
    { name: "Payments", href: "/admin/payments", icon: "payments" },
    { name: "Attendance", href: "/admin/attendance", icon: "event_available" },
    { name: "Trainers", href: "/admin/trainers", icon: "fitness_center" },
    { name: "Branches", href: "/admin/branches", icon: "location_on", superOnly: true },
    { name: "Shop", href: "/admin/shop", icon: "shopping_cart" },
    { name: "Settings", href: "/admin/settings", icon: "settings" },
  ].filter(item => !item.superOnly || isSuperAdmin);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Persistent Sidebar (Desktop) */}
      <aside className="fixed left-0 top-0 hidden lg:flex flex-col h-screen w-72 bg-surface-container-low border-r border-white/5 z-40 py-10">
        <div className="px-10 mb-8">
          <Link href="/" className="text-3xl font-black italic text-primary font-headline tracking-tighter uppercase block">
            APEX FORGE
          </Link>
          <div className="text-[10px] tracking-[0.3em] text-on-surface-variant font-black uppercase mt-1">Management Grid</div>
        </div>

        {/* Branch Switcher (Super Admin Only) */}
        {isSuperAdmin && (
          <div className="px-6 mb-8">
            <div className="p-3 bg-surface-container-high rounded-xl border border-white/5">
              <label className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant mb-2 block px-1">Selected Sector</label>
              <select 
                value={activeBranch}
                onChange={(e) => setActiveBranch(e.target.value)}
                className="w-full bg-surface-container rounded-lg px-3 py-2 text-[10px] font-black uppercase tracking-widest border border-white/5 focus:ring-1 focus:ring-primary outline-none transition-all"
              >
                <option value="all">GLOBAL OVERVIEW</option>
                {BRANCHES.map(b => (
                  <option key={b.slug} value={b.slug}>{b.name.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Admin Info Card */}
        <div className="px-6 mb-10">
          <div className={`p-4 bg-surface-container-high rounded-2xl flex items-center gap-4 border ${isBranchAdmin ? 'border-primary/40' : 'border-white/5'}`}>
             <div className={`w-10 h-10 rounded-lg ${isBranchAdmin ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center border border-primary/20`}>
                <span className="material-symbols-outlined text-emerald-500">{isSuperAdmin ? 'shield_person' : 'badge'}</span>
             </div>
             <div>
                <p className="text-xs font-black text-foreground uppercase tracking-widest">{user.name.split(' ')[0]}</p>
                <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest leading-none mt-1">
                  {isSuperAdmin ? 'Global Access' : isBranchAdmin ? `Sector: ${user.assignedBranches?.[0]}` : 'Admin Access'}
                </p>
             </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-5 px-6 py-4 rounded-xl font-headline text-base font-bold transition-all ${
                  isActive
                    ? "kinetic-gradient text-white italic shadow-lg shadow-emerald-900/20"
                    : "text-on-surface-variant hover:text-emerald-400 hover:bg-surface-container-highest"
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                <span className="uppercase tracking-tighter">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-8 mt-auto pt-8 border-t border-white/5">
           <button className="flex items-center gap-4 text-on-surface-variant hover:text-destructive transition-colors text-xs font-black uppercase tracking-widest">
              <span className="material-symbols-outlined">logout</span>
              Terminate Session
           </button>
        </div>
      </aside>

      {/* Mobile AppBar */}
      <header className="lg:hidden fixed top-0 w-full glass h-16 sm:h-20 items-center px-4 sm:px-6 flex justify-between z-50">
         <div className="text-xl sm:text-2xl font-black italic text-primary font-headline tracking-tighter uppercase">APEX FORGE</div>
         <button
           className="p-2 text-primary active:scale-90 transition-transform"
           onClick={() => setIsMenuOpen(true)}
         >
            <span className="material-symbols-outlined text-3xl">menu</span>
         </button>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-surface-container-low/98 backdrop-blur-2xl lg:hidden flex flex-col p-6 sm:p-10"
          >
            <div className="flex justify-between items-center mb-10">
              <div>
                <div className="text-2xl font-black italic text-primary font-headline tracking-tighter uppercase">APEX FORGE</div>
                <div className="text-[10px] tracking-[0.3em] text-on-surface-variant font-black uppercase mt-1">Management Grid</div>
              </div>
              <button
                className="p-2 text-primary active:rotate-90 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-4xl">close</span>
              </button>
            </div>

            {/* Mobile Branch Switcher */}
            {isSuperAdmin && (
              <div className="mb-6">
                <select 
                  value={activeBranch}
                  onChange={(e) => {
                    setActiveBranch(e.target.value);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-surface-container-high rounded-xl px-4 py-4 text-xs font-black uppercase tracking-widest border border-white/5 outline-none"
                >
                  <option value="all">GLOBAL OVERVIEW</option>
                  {BRANCHES.map(b => (
                    <option key={b.slug} value={b.slug}>{b.name.toUpperCase()}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="px-2 mb-6">
              <div className="p-4 bg-surface-container-high rounded-2xl flex items-center gap-4 border border-white/5">
                 <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/20">
                    <span className="material-symbols-outlined text-primary">{isSuperAdmin ? 'shield_person' : 'badge'}</span>
                 </div>
                 <div>
                    <p className="text-xs font-black text-foreground uppercase tracking-widest">{user.name}</p>
                    <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest">
                      {isSuperAdmin ? 'Global Access' : `Sector: ${user.assignedBranches?.[0]}`}
                    </p>
                 </div>
              </div>
            </div>

            <nav className="flex flex-col gap-1 flex-1 overflow-y-auto custom-scrollbar">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-5 px-6 py-4 rounded-xl font-headline text-base font-bold transition-all ${
                        isActive
                          ? "kinetic-gradient text-white italic shadow-lg shadow-emerald-900/20"
                          : "text-on-surface-variant hover:text-emerald-400 hover:bg-surface-container-highest"
                      }`}
                    >
                      <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      <span className="uppercase tracking-tighter">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-white/5">
               <button className="flex items-center gap-4 text-on-surface-variant hover:text-destructive transition-colors text-xs font-black uppercase tracking-widest">
                  <span className="material-symbols-outlined">logout</span>
                  Terminate Session
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
