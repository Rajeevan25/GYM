export default function MemberProfilePage() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-primary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Athlete Identity</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Profile <br/><span className="text-primary tracking-normal">Protocol</span>
          </h1>
        </div>
        <button className="bg-surface-container-high text-foreground px-6 sm:px-8 py-4 font-black rounded-xl border border-white/5 text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all w-fit">
           Edit Credentials
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Personal Details */}
        <div className="lg:col-span-4 space-y-6 sm:space-y-8">
           <div className="bg-surface-container rounded-3xl p-6 sm:p-10 border border-outline-variant/10 shadow-2xl flex flex-col items-center">
              <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-[32px] sm:rounded-[40px] bg-primary/10 border-2 border-primary/20 p-2 mb-6 sm:mb-8 relative group">
                 <img
                    src="/images/avatar.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px]"
                 />
                 <div className="absolute inset-0 bg-primary/40 rounded-[24px] sm:rounded-[32px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="material-symbols-outlined text-background font-black scale-150">photo_camera</span>
                 </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-1">Alex Rivera</h3>
              <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] italic mb-6 sm:mb-8">Gold Tier Member</p>

              <div className="w-full space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-white/5">
                 <div className="flex justify-between items-center bg-surface-container-low p-3 sm:p-4 rounded-xl border border-white/5">
                    <span className="text-[8px] font-black uppercase tracking-widest text-on-surface-variant">Membership ID</span>
                    <span className="text-xs font-black italic tracking-tighter uppercase">#JK-990-24</span>
                 </div>
                 <div className="flex justify-between items-center bg-surface-container-low p-3 sm:p-4 rounded-xl border border-white/5">
                    <span className="text-[8px] font-black uppercase tracking-widest text-on-surface-variant">Branch Access</span>
                    <span className="text-xs font-black italic tracking-tighter uppercase text-primary">Global Platinum</span>
                 </div>
              </div>
           </div>

           <div className="bg-surface-container-low rounded-3xl p-6 sm:p-10 border border-outline-variant/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <span className="material-symbols-outlined text-8xl">fingerprint</span>
              </div>
              <h4 className="text-base sm:text-lg font-black italic uppercase tracking-tighter mb-4 sm:mb-6 relative z-10">Biometric Matrix</h4>
              <div className="space-y-4 sm:space-y-6 relative z-10">
                 <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Height</span>
                    <span className="text-lg sm:text-xl font-black italic tracking-tighter">182<span className="text-[8px] font-normal tracking-normal lowercase ml-1">cm</span></span>
                 </div>
                 <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Target Weight</span>
                    <span className="text-lg sm:text-xl font-black italic tracking-tighter">85<span className="text-[8px] font-normal tracking-normal lowercase ml-1">kg</span></span>
                 </div>
                 <div className="flex justify-between items-end border-b border-white/5 pb-4 text-primary">
                    <span className="text-[10px] font-black uppercase tracking-widest">Active Bodyfat</span>
                    <span className="text-lg sm:text-xl font-black italic tracking-tighter">12.4<span className="text-[8px] font-normal tracking-normal lowercase ml-1">%</span></span>
                 </div>
              </div>
           </div>
        </div>

        {/* Extended Settings & History */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
           <div className="bg-surface-container rounded-3xl p-6 sm:p-10 border border-outline-variant/10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-black italic tracking-tighter uppercase mb-6 sm:mb-10">Security Protocols</h3>
              <div className="space-y-4 sm:space-y-8">
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 bg-surface-container-high rounded-2xl border border-white/5 group hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-4 sm:gap-6">
                       <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">key</span>
                       <div>
                          <p className="text-sm font-black uppercase tracking-tighter">Credential Rotation</p>
                          <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest leading-none mt-1">Last changed: 42 days ago</p>
                       </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant/30 group-hover:text-primary transition-colors">chevron_right</span>
                 </div>

                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 bg-surface-container-high rounded-2xl border border-white/5 group hover:border-secondary/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-4 sm:gap-6">
                       <span className="material-symbols-outlined text-secondary text-2xl sm:text-3xl">devices</span>
                       <div>
                          <p className="text-sm font-black uppercase tracking-tighter">Authorized Matrix</p>
                          <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest leading-none mt-1">3 Active sessions recognized</p>
                       </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant/30 group-hover:text-secondary transition-colors">chevron_right</span>
                 </div>

                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 bg-surface-container-high rounded-2xl border border-white/5 group hover:border-error/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-4 sm:gap-6">
                       <span className="material-symbols-outlined text-error text-2xl sm:text-3xl">shield_locked</span>
                       <div>
                          <p className="text-sm font-black uppercase tracking-tighter">Privacy Firewall</p>
                          <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest leading-none mt-1">Status: Fully Encrypted</p>
                       </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant/30 group-hover:text-error transition-colors">chevron_right</span>
                 </div>
              </div>
           </div>

           <div className="bg-surface-container-low rounded-3xl p-6 sm:p-10 border border-outline-variant/10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>
              <h3 className="text-xl sm:text-2xl font-black italic tracking-tighter uppercase mb-6 sm:mb-10">Connected Kinetic Apps</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                 <div className="p-5 sm:p-8 bg-surface-container rounded-2xl border border-white/5 flex gap-4 sm:gap-6 items-center">
                    <div className="bg-white p-2 rounded-lg grayscale group-hover:grayscale-0 transition-all">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="w-7 h-7 sm:w-8 sm:h-8" alt="Apple" />
                    </div>
                    <div>
                       <p className="text-xs font-black uppercase tracking-[0.2em] mb-1">Health Kit</p>
                       <p className="text-[8px] text-primary font-black uppercase tracking-widest italic">Actively Syncing</p>
                    </div>
                 </div>
                 <div className="p-5 sm:p-8 bg-surface-container rounded-2xl border border-white/5 flex gap-4 sm:gap-6 items-center">
                    <div className="bg-surface-container-highest p-2 rounded-lg">
                       <span className="material-symbols-outlined text-red-500 text-2xl sm:text-3xl">favorite</span>
                    </div>
                    <div>
                       <p className="text-xs font-black uppercase tracking-[0.2em] mb-1">MyFitnessPal</p>
                       <p className="text-[8px] text-on-surface-variant/50 font-black uppercase tracking-widest italic">Tap to integrate</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
