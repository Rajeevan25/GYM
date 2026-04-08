"use client";

import Link from "next/link";

interface StatHexagonProps {
  label: string;
  value: string;
  delay?: string;
}

function StatHexagon({ label, value, delay }: StatHexagonProps) {
  return (
    <div 
      className="w-32 h-36 sm:w-40 sm:h-44 border border-primary/20 flex flex-col items-center justify-center p-4 animate-float text-center group hover:bg-primary/10 transition-colors"
      style={{ 
        animationDelay: delay,
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
      }}
    >
      <div className="text-primary font-headline text-2xl sm:text-3xl font-black mb-1 group-hover:scale-110 transition-transform">{value}</div>
      <div className="text-on-surface-variant font-black uppercase tracking-[0.2em] text-[8px] sm:text-[10px] leading-tight">{label}</div>
    </div>
  );
}

interface ImageHexagonProps {
  src: string;
  delay?: string;
}

function ImageHexagon({ src, delay }: ImageHexagonProps) {
  return (
    <div 
      className="w-32 h-36 sm:w-40 sm:h-44 border border-primary/10 overflow-hidden animate-float"
      style={{ 
        animationDelay: delay,
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
      }}
    >
      <img src={src} alt="Gym Facility" className="w-full h-full object-cover transition-all duration-700 hover:scale-110" />
    </div>
  );
}

export function BranchHero() {
  return (
    <section className="relative min-h-fit lg:min-h-screen flex items-center overflow-hidden py-4 lg:py-0">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-[10px] font-black tracking-widest uppercase">Global Hubs</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 font-headline leading-[0.9]">
            Architecture of <br/>
            <span className="text-primary italic">Performance.</span>
          </h1>

          <p className="text-on-surface-variant text-base sm:text-lg lg:text-xl mb-10 max-w-xl font-body leading-relaxed opacity-80">
            Across Jaffna, our strategic hubs are engineered for one purpose: elite physical transformation. Visit our world-class facilities and join the kinetic movement.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link
              href="#branches-list"
              className="kinetic-gradient text-white px-8 sm:px-10 py-4 font-black text-sm rounded-md uppercase hover:opacity-90 transition-all active:scale-95"
            >
              LOCATE A BRANCH
            </Link>
            <Link
              href="/register"
              className="border border-outline-variant/30 bg-white/5 backdrop-blur-md text-foreground px-8 sm:px-10 py-4 font-black text-sm rounded-md uppercase tracking-tighter hover:bg-white/10 transition-all text-center"
            >
              Join the Network
            </Link>
          </div>
        </div>

        {/* Right Side - Hexagon Honeycomb Cluster (Desktop Only) */}
        <div className="hidden lg:flex order-2 justify-end items-center py-12 lg:py-0">
          <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4 -space-y-12 sm:-space-x-8 lg:-space-x-12 sm:items-center">
            {/* Row 1 */}
            <div className="flex flex-col gap-4 translate-y-8 sm:translate-y-12">
              <ImageHexagon src="/images/branch-jaffna-new.png" delay="0s" />
              <StatHexagon label="Machines" value="50+" delay="1.5s" />
            </div>
            
            {/* Row 2 - Center Column */}
            <div className="flex flex-col gap-4">
              <StatHexagon label="Access" value="24/7" delay="0.5s" />
              <ImageHexagon src="/images/branch-nallur-new.png" delay="2.5s" />
              <StatHexagon label="Sauna" value="YES" delay="1s" />
            </div>

            {/* Row 3 */}
            <div className="flex flex-col gap-4 translate-y-8 sm:translate-y-12">
              <ImageHexagon src="/images/branch-kondavil-new.png" delay="0.8s" />
              <StatHexagon label="Elite Coaches" value="12+" delay="2s" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
