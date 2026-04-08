import Link from "next/link";
import { BRANCHES } from "@/lib/data";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[150px] -ml-32 sm:-ml-64 -mt-32 sm:-mt-64"></div>

      <div className="w-full max-w-lg sm:max-w-2xl z-10">
        <Link href="/" className="text-3xl sm:text-4xl font-black italic text-primary tracking-tighter uppercase font-headline block text-center mb-10 sm:mb-12">
          JK GYM
        </Link>

        <div className="bg-surface-container rounded-2xl p-6 sm:p-10 border border-outline-variant/10 shadow-2xl relative">
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter mb-2">Join the Revolution</h1>
            <p className="text-on-surface-variant text-xs font-black uppercase tracking-widest">Architect your future physique</p>
          </div>

          {/* Step Indicator */}
          <div className="flex justify-between mb-8 sm:mb-12 gap-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex-1 flex flex-col gap-2">
                <div className={`h-1.5 rounded-full ${step === 1 ? 'bg-primary' : 'bg-surface-container-high'}`}></div>
                <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${step === 1 ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {step === 1 ? 'Personal Init' : step === 2 ? 'Branch Select' : 'Final Tier'}
                </span>
              </div>
            ))}
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Legal Name</label>
              <input
                type="text"
                placeholder="FIRST LAST"
                className="w-full bg-surface-container-high border-none rounded-lg px-5 sm:px-6 py-4 focus:ring-1 focus:ring-primary text-foreground placeholder:text-on-surface-variant/30 font-medium transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Contact Signal</label>
              <input
                type="tel"
                placeholder="+94 77 XXXXXXX"
                className="w-full bg-surface-container-high border-none rounded-lg px-5 sm:px-6 py-4 focus:ring-1 focus:ring-primary text-foreground placeholder:text-on-surface-variant/30 font-medium transition-all"
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Digital Identity (Email)</label>
              <input
                type="email"
                placeholder="athlete@kinetic.com"
                className="w-full bg-surface-container-high border-none rounded-lg px-5 sm:px-6 py-4 focus:ring-1 focus:ring-primary text-foreground placeholder:text-on-surface-variant/30 font-medium transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Target Branch</label>
              <select className="w-full bg-surface-container-high border-none rounded-lg px-5 sm:px-6 py-4 focus:ring-1 focus:ring-primary text-foreground font-medium transition-all appearance-none uppercase">
                 {BRANCHES.map(branch => (
                   <option key={branch.slug} value={branch.slug}>{branch.name}</option>
                 ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-1">Intensity Level (Plan)</label>
              <select className="w-full bg-surface-container-high border-none rounded-lg px-5 sm:px-6 py-4 focus:ring-1 focus:ring-primary text-foreground font-medium transition-all appearance-none">
                 <option>PRO (Rs. 6,500/mo)</option>
                 <option>BASIC (Rs. 3,500/mo)</option>
                 <option>PREMIUM (Rs. 12,000/mo)</option>
              </select>
            </div>

            <Link
              href="/register/pending"
              className="sm:col-span-2 kinetic-gradient text-white py-4 sm:py-5 rounded-lg font-black text-base sm:text-xl uppercase tracking-tighter hover:scale-[1.01] transition-all flex items-center justify-center mt-4 sm:mt-6 active:scale-[0.98]"
            >
              Initialize Onboarding Protocol
            </Link>
          </form>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-outline-variant/10 text-center">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Already an Athlete?</p>
            <Link
              href="/login"
              className="text-primary font-black uppercase tracking-tighter text-base sm:text-lg hover:italic transition-all"
            >
              RESUME KINETIC SESSION
            </Link>
          </div>
        </div>

        <p className="mt-10 sm:mt-12 text-center text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-50">
          DATA SUBJECT TO KINETIC PRIVACY CLAUSE | 2024
        </p>
      </div>
    </div>
  );
}
