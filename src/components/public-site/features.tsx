export function PublicFeatures() {
  return (
    <section className="no-border-section max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-12 sm:mb-20 lg:mb-24 gap-6 sm:gap-8">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black italic uppercase tracking-tighter leading-none mb-4 sm:mb-6">Engineered for <br/><span className="text-primary italic">Performance</span></h2>
          <div className="h-1.5 w-32 sm:w-48 bg-primary mt-4 sm:mt-6"></div>
        </div>
        <div className="text-left lg:text-right max-w-md">
          <p className="text-on-surface-variant text-base sm:text-xl leading-relaxed">We've combined industrial strength with digital precision to create the ultimate training environment in Jaffna.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2 bg-surface-container rounded-2xl overflow-hidden relative group h-[300px] sm:h-[400px] lg:h-[550px] border border-outline-variant/10">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-50"
            src="/images/feature-equipment.png"
            alt="Industrial gym weights"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-12">
            <span className="material-symbols-outlined text-primary text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-6 block">fitness_center</span>
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-2 sm:mb-4 italic">High-Tech Equipment</h3>
            <p className="text-on-surface-variant text-sm sm:text-lg max-w-xl font-body hidden sm:block">Precision machines from Hammer Strength and Eleiko for maximum mechanical advantage. The best gear in Sri Lanka.</p>
          </div>
        </div>

        <div className="bg-surface-container rounded-2xl overflow-hidden relative group h-[280px] sm:h-[380px] lg:h-[550px] border border-outline-variant/10">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.4]"
            src="/images/feature-trainers.png"
            alt="Elite Trainers"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-12 w-full">
            <span className="material-symbols-outlined text-primary text-5xl sm:text-7xl mb-4 sm:mb-8">groups</span>
            <h3 className="text-2xl sm:text-4xl font-black italic uppercase tracking-tighter mb-2 sm:mb-4">Elite <br/>Trainers</h3>
            <p className="text-on-surface-variant text-sm sm:text-lg leading-relaxed font-body hidden sm:block">Certified kinetic architects ready to rebuild your physique from the ground up with scientific precision.</p>
          </div>
        </div>

        <div className="bg-surface-container rounded-2xl overflow-hidden relative group h-[280px] sm:h-[380px] lg:h-[550px] border border-outline-variant/10">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.4]"
            src="/images/feature-branches.png"
            alt="Multiple Branches"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-12 w-full">
            <span className="material-symbols-outlined text-primary text-5xl sm:text-7xl mb-4 sm:mb-8">location_on</span>
            <h3 className="text-2xl sm:text-4xl font-black italic uppercase tracking-tighter mb-2 sm:mb-4 text-primary">Multiple <br/>Branches</h3>
            <p className="text-on-surface-variant text-sm sm:text-lg leading-relaxed font-body hidden sm:block">Seamlessly move between our Town, Nallur, and Kondavil locations with a single membership tag.</p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-surface-container rounded-2xl overflow-hidden relative group h-[300px] sm:h-[400px] lg:h-[550px] border border-outline-variant/10">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-50"
            src="/images/feature-community.png"
            alt="Athlete training"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-12">
            <span className="material-symbols-outlined text-primary text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-6 block">bolt</span>
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-2 sm:mb-4 italic">Elite Community</h3>
            <p className="text-on-surface-variant text-sm sm:text-lg max-w-xl font-body hidden sm:block">Join a collective of individuals pushing the boundaries of human potential. No ego, just results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
