export function PublicTestimonials() {
  const testimonials = [
    {
      initials: "SK",
      name: "Suthan K.",
      role: "Member since 2022",
      quote: "The best gym in Jaffna by far. The equipment is world-class and the high-energy atmosphere keeps you motivated every single day.",
    },
    {
      initials: "AT",
      name: "Aarthy T.",
      role: "Elite Pro Tier",
      quote: "Trainer support is incredible. They focus on structural integrity and precision form rather than just lifting heavy ego weights.",
    },
    {
      initials: "RS",
      name: "Ravi S.",
      role: "Multi-branch Member",
      quote: "Digital access via QR makes it incredibly seamless. I can train at the Town branch or Nallur branch anytime depending on my schedule.",
    },
  ];

  return (
    <section className="no-border-section max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="text-center mb-12 sm:mb-20 lg:mb-24">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none mb-4 sm:mb-6">The Member <br/><span className="text-primary italic">Log</span></h2>
        <p className="text-on-surface-variant mt-3 sm:mt-4 text-base sm:text-xl max-w-2xl mx-auto">Voices from our kinetic community in Jaffna.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-surface-container-low p-6 sm:p-8 lg:p-12 rounded-2xl border-l-[12px] border-primary shadow-2xl relative group hover:-translate-y-2 transition-all duration-300">
            <div className="flex text-primary mb-6 sm:mb-10">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-xl sm:text-2xl">star</span>
              ))}
            </div>
            <p className="text-foreground text-base sm:text-xl italic mb-8 sm:mb-12 leading-relaxed font-body font-medium">"{t.quote}"</p>
            <div className="flex items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-outline-variant/10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-2xl flex items-center justify-center font-black text-primary text-xl sm:text-2xl italic tracking-tighter">
                {t.initials}
              </div>
              <div>
                <div className="font-black text-lg sm:text-xl uppercase font-headline tracking-tighter">{t.name}</div>
                <div className="text-[10px] text-on-surface-variant font-black tracking-[0.2em] uppercase mt-1">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
