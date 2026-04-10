"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getCurrentUser, logout } from "@/lib/auth";

export function TrainerHeader() {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const user = getCurrentUser();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-72 h-20 bg-background/80 backdrop-blur-md border-b border-white/5 z-30 px-6 sm:px-12 flex items-center justify-between">
      {/* Branding for Mobile */}
      <div className="lg:hidden flex items-center">
        <div className="text-xl font-black italic text-secondary font-headline tracking-tighter uppercase">TRAINER HUB</div>
      </div>

      {/* Search Bar - Tailored for Trainer Hub */}
      <div className="flex-1 max-w-xl lg:ml-0 ml-6 hidden sm:block">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-colors">
            search
          </span>
          <input
            type="text"
            placeholder="Search clients, programs, or sessions..."
            className="w-full bg-surface-container-high/40 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-on-surface-variant/30 group-hover:bg-surface-container-high/60"
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4 sm:gap-6 ml-auto lg:ml-6">
        {/* Messages/Schedule Shortcuts */}
        <button className="relative p-2 text-on-surface-variant hover:text-secondary transition-colors">
          <span className="material-symbols-outlined text-2xl">event_note</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full ring-2 ring-background"></span>
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 p-1 rounded-full hover:bg-white/5 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-xs font-black ring-2 ring-secondary/20 shadow-lg">
               <span className="material-symbols-outlined">{initials.length > 2 ? 'person' : 'person'}</span>
               {initials}
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-sm hidden sm:block">
              {isProfileOpen ? 'expand_less' : 'expand_more'}
            </span>
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-64 bg-surface-container-highest border border-white/5 rounded-2xl shadow-2xl z-50 overflow-hidden"
              >
                <div className="p-6 border-b border-white/5 bg-white/5 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-2xl font-black mx-auto mb-3 shadow-xl ring-4 ring-secondary/10">
                    <span className="material-symbols-outlined text-4xl">person</span>
                  </div>
                  <p className="font-headline text-lg font-bold text-white uppercase tracking-tighter">{user.name}</p>
                  <div className="inline-block px-3 py-1 bg-secondary/20 rounded-full mt-2">
                    <p className="text-[9px] text-secondary font-black uppercase tracking-widest leading-none">ELITE ARCHITECT</p>
                  </div>
                </div>
                
                <div className="p-2">
                  <button className="w-full flex items-center gap-4 px-4 py-3 text-sm font-bold text-on-surface-variant hover:text-secondary hover:bg-white/5 rounded-xl transition-all uppercase tracking-tighter group">
                    <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">fitness_center</span>
                    Program Lab
                  </button>
                  <button className="w-full flex items-center gap-4 px-4 py-3 text-sm font-bold text-on-surface-variant hover:text-secondary hover:bg-white/5 rounded-xl transition-all uppercase tracking-tighter group">
                    <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">monitoring</span>
                    Analytics
                  </button>
                  <div className="h-px bg-white/5 my-2 mx-2" />
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 px-4 py-3 text-sm font-bold text-destructive hover:bg-destructive/10 rounded-xl transition-all uppercase tracking-tighter group"
                  >
                    <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">logout</span>
                    Initialize Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
