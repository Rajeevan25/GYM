import Link from "next/link";

export function PublicSupplements() {
  return (
    <section className="no-border-section max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="bg-surface-container rounded-[24px] sm:rounded-[40px] p-6 sm:p-12 lg:p-24 relative overflow-hidden group">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-20">
          <div className="max-w-2xl w-full">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black italic uppercase tracking-tighter mb-6 sm:mb-8 leading-[0.9]">Fuel <br/><span className="text-primary italic">The Grind</span></h2>
            <p className="text-on-surface-variant text-base sm:text-xl mb-8 sm:mb-12 leading-relaxed max-w-xl">
              Premium supplements, protein isolates, and performance gear curated by our head coaches.
              <span className="text-primary font-black block mt-3 sm:mt-4 uppercase tracking-[0.2em] italic">Exclusive 20% discount for members.</span>
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-md">
              <div className="bg-surface-container-high p-4 sm:p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all cursor-default group/card overflow-hidden relative">
                <div className="relative z-10">
                  <div className="text-primary font-black text-base sm:text-xl mb-1 italic">WHEY ISOLATE</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-black">Pure Recovery</div>
                </div>
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover/card:translate-y-0 transition-transform"></div>
              </div>
              <div className="bg-surface-container-high p-4 sm:p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all cursor-default group/card overflow-hidden relative text-right">
                <div className="relative z-10">
                  <div className="text-primary font-black text-base sm:text-xl mb-1 italic text-right">PRE-WORKOUT</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-black text-right">Explosive Power</div>
                </div>
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover/card:translate-y-0 transition-transform"></div>
              </div>
            </div>

            <Link
              href="/shop"
              className="bg-foreground text-background py-4 sm:py-5 px-8 sm:px-12 rounded-xl font-black text-base sm:text-xl uppercase tracking-tighter hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-3 sm:gap-4 w-fit active:scale-95 duration-200"
            >
              Shop Supplement Store
              <span className="material-symbols-outlined font-black">shopping_cart</span>
            </Link>
          </div>

          <div className="w-full lg:flex-1 relative max-w-sm lg:max-w-[450px] mx-auto">
            <img
              className="w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)] motion-safe:hover:scale-105 transition-transform duration-500"
              src="/images/shop/shop-bundle-full.png"
              alt="Premium Kinetic Supplements"
            />
            {/* Abstract Glow */}
            <div className="absolute -right-20 -bottom-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none group-hover:bg-primary/15 transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
