"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/cart-context";

export function PublicHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Branches", href: "/branches" },
    { title: "Timetable", href: "/timetable" },
    { title: "Memberships", href: "/plans" },
    { title: "Trainers", href: "/trainers" },
    { title: "Shop", href: "/shop" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass py-4 shadow-lg" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 flex justify-between items-center h-full">
          {/* Left: Brand */}
          <div className="flex-1">
            <Link href="/" className="text-3xl font-black italic text-primary tracking-tighter uppercase font-headline inline-block">
              <span className="hidden sm:inline">JK GYM</span>
              <span className="sm:hidden">NFG</span>
            </Link>
          </div>
          
          {/* Center: Navigation (Desktop) */}
          <nav className="hidden lg:flex gap-6 xl:gap-12 font-headline tracking-tighter uppercase text-sm font-bold bg-white/5 backdrop-blur-md px-6 xl:px-10 py-3 rounded-full border border-white/5 shadow-xl">
            {navLinks.map((link) => (
              <Link 
                key={link.title}
                href={link.href} 
                className={`transition-colors ${
                  pathname === link.href ? "text-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary transition-all" : "text-on-surface-variant hover:text-primary transition-colors"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          {/* Right: Actions */}
          <div className="flex-1 flex justify-end items-center gap-4 xl:gap-8">
            {/* Cart Link (Desktop) */}
            <Link 
              href="/shop/cart"
              className="relative p-2 text-foreground hover:text-primary transition-colors group"
            >
              <span className="material-symbols-outlined text-2xl group-active:scale-90 transition-transform">shopping_cart</span>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link 
              href="/login" 
              className="hidden lg:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-headline font-bold text-sm uppercase tracking-tighter"
            >
              <span className="material-symbols-outlined text-xl">login</span>
              Member Login
            </Link>
            
            <Link
              href="/register"
              className="kinetic-gradient text-white px-5 sm:px-10 py-2.5 sm:py-3 rounded-md font-black tracking-tighter uppercase active:scale-95 duration-200 text-xs sm:text-sm"
            >
              JOIN NOW
            </Link>
            
            {/* Mobile Menu Icon */}
            <button 
              className="lg:hidden p-2 text-primary cursor-pointer active:scale-90 transition-transform"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-surface/95 backdrop-blur-2xl lg:hidden flex flex-col p-10 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic text-primary tracking-tighter uppercase font-headline">
                <span className="hidden sm:inline">JK GYM</span>
                <span className="sm:hidden">NFG</span>
              </Link>
              <div className="flex items-center gap-4">
                {/* Cart Link (Mobile) */}
                <Link 
                  href="/shop/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative p-2 text-primary"
                >
                  <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                  {totalItems > 0 && (
                    <span className="absolute top-0 right-0 bg-white text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full">
                      {totalItems}
                    </span>
                  )}
                </Link>
                <button 
                  className="p-2 text-primary cursor-pointer active:rotate-90 transition-transform duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-4xl">close</span>
                </button>
              </div>
            </div>

            <nav className="flex flex-col gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-5xl font-black italic tracking-tighter uppercase font-headline transition-all duration-300 hover:translate-x-3 inline-block ${
                      pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                className="mt-12 pt-12 border-t border-white/10 flex flex-col gap-8"
              >
                <Link 
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 text-2xl font-bold uppercase tracking-tighter font-headline text-on-surface-variant hover:text-primary"
                >
                  <span className="material-symbols-outlined text-3xl">login</span>
                  Member Login
                </Link>
                
                <Link 
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="kinetic-gradient text-white w-full py-6 rounded-2xl font-black tracking-tighter uppercase text-center text-2xl active:scale-[0.98] transition-all"
                >
                  JOIN NOW
                </Link>
              </motion.div>
            </nav>
            
            <div className="mt-auto pt-10 text-center opacity-30 text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant">
              Premium Fitness Experience • Est. 2024
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
