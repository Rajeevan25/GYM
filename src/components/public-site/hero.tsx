"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function PublicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set to 0.5 for half speed. You can change this to 0.8, 1.5, etc.
      videoRef.current.playbackRate = 0.3; 
    }
  }, []);

  return (
     <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden py-24 lg:py-0">
      <div className="absolute inset-0 z-0 ">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover object-center opacity-100" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Neutral overlays that don't mix with theme color, ensuring video clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-12 mt-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase">Now Open in Nallur & Town</span>
          </div>

          <h1 className="text-[2.75rem] sm:text-[3.2rem] lg:text-[6rem] leading-[0.9] font-black uppercase tracking-tighter mb-8 sm:mb-8 font-headline">
            Architect Your <br/>
            <span className="text-primary italic">Kinetic Edge</span> <br/>
            In Jaffna.
          </h1>

          <p className="text-on-surface-variant text-base sm:text-lg lg:text-xl mb-10 sm:mb-10 max-w-xl font-body leading-relaxed">
            The ultimate destination for architectural body transformation. Precision equipment, elite coaching, and a community built on kinetic energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-5">
            <Link
              href="/register"
              className="kinetic-gradient text-white px-8 sm:px-10 py-4 sm:py-5 font-black text-sm rounded-md uppercase active:scale-95 transition-all text-center flex items-center justify-center"
            >
              BECOME A MEMBER
            </Link>
            <Link
              href="/about"
              className="border border-outline-variant/30 bg-white/5 backdrop-blur-md text-foreground px-8 sm:px-10 py-4 sm:py-5 font-black text-sm rounded-md uppercase tracking-tighter hover:bg-white/10 transition-all text-center flex items-center justify-center"
            >
              Tour Our Facilities
            </Link>
          </div>
        </div>

        
        {/* Large Stats Display */}
        <div className="hidden lg:grid grid-cols-2 gap-6 items-center">
          <div className="bg-surface-container-high/30 backdrop-blur-xl p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="text-primary font-headline text-7xl font-black tracking-tighter mb-2 group-hover:scale-105 transition-transform origin-left">94%</div>
            <div className="text-on-surface-variant font-black uppercase tracking-[0.3em] text-[10px]">Member Success Rate</div>
          </div>
          <div className="bg-surface-container-high/30 backdrop-blur-xl p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group lg:translate-y-12">
            <div className="text-primary font-headline text-7xl font-black tracking-tighter mb-2 group-hover:scale-105 transition-transform origin-left">3+</div>
            <div className="text-on-surface-variant font-black uppercase tracking-[0.3em] text-[10px]">Prime Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
