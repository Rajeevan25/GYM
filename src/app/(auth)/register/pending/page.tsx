'use client';

import Link from "next/link";

export default function PendingApprovalPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -mr-64 -mt-64"></div>
      
      <div className="w-full max-w-md z-10 text-center">
        <div className="text-8xl font-black italic text-primary tracking-tighter uppercase font-headline mb-12 animate-pulse">
          JK GYM
        </div>
        
        <div className="bg-surface-container rounded-[40px] p-12 border border-outline-variant/10 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1.5 bg-primary/30">
              <div className="h-full bg-primary animate-[shimmer_2s_infinite]"></div>
           </div>
           
           <div className="mb-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-5xl animate-bounce">verified_user</span>
              </div>
              <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-foreground">Awaiting <br/><span className="text-primary italic">Validation</span></h1>
              <p className="text-on-surface-variant text-sm font-black uppercase tracking-[0.2em] leading-relaxed">
                 KINETIC PROTOCOL: 042-99
              </p>
           </div>
           
           <div className="space-y-6 text-on-surface-variant text-sm font-medium leading-relaxed font-body mb-10">
              <p>Your registration for the <span className="text-foreground font-black">JAFFNA TOWN HQ</span> branch has been successfully initialized.</p>
              <p>The Kinetic Architect team is verifying your credentials and tier structure. This typically takes 2-4 business hours.</p>
              <div className="p-4 bg-surface-container-high rounded-xl border border-outline-variant/10 text-xs">
                 <span className="text-primary font-black uppercase tracking-widest mr-2">Status:</span> 
                 <span className="text-foreground font-bold tracking-tighter uppercase italic">Pending Branch Verification</span>
              </div>
           </div>
           
           <Link 
              href="/" 
              className="w-full bg-foreground text-background py-5 rounded-xl font-black text-lg uppercase tracking-tighter hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center active:scale-[0.98]"
            >
              Return to Base
           </Link>
        </div>
        
        <p className="mt-12 text-center text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-50">
          SYSTEM SCANNING | Jaffna Operations Center
        </p>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
