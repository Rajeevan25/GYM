import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="bg-surface-container-low w-full border-t border-outline-variant/10 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
        <div className="col-span-2 lg:col-span-2">
          <Link href="/" className="text-2xl sm:text-3xl font-black italic text-primary font-headline tracking-tighter uppercase mb-4 sm:mb-6 block">
            JK GYM
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm mb-6 sm:mb-8">
            The Kinetic Architect. Precision-built fitness infrastructure for the next generation of athletes in Jaffna. Rebuild your physique with us.
          </p>
          <div className="flex gap-3 sm:gap-4">
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-surface-container rounded-lg border border-outline-variant/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
              <span className="material-symbols-outlined text-base sm:text-lg">share</span>
            </a>
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-surface-container rounded-lg border border-outline-variant/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
              <span className="material-symbols-outlined text-base sm:text-lg">alternate_email</span>
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="text-foreground font-black uppercase tracking-[0.2em] text-xs mb-6 sm:mb-8">Explore</h4>
          <ul className="space-y-3 sm:space-y-4 text-on-surface-variant font-medium text-xs sm:text-sm">
            <li><Link href="/branches" className="hover:text-primary transition-all">Our Branches</Link></li>
            <li><Link href="/timetable" className="hover:text-primary transition-all">Class Timetable</Link></li>
            <li><Link href="/plans" className="hover:text-primary transition-all">Membership Plans</Link></li>
            <li><Link href="/trainers" className="hover:text-primary transition-all">Elite Trainers</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-foreground font-black uppercase tracking-[0.2em] text-xs mb-6 sm:mb-8">Support</h4>
          <ul className="space-y-3 sm:space-y-4 text-on-surface-variant font-medium text-xs sm:text-sm">
            <li><Link href="/contact" className="hover:text-primary transition-all">Contact Center</Link></li>
            <li><Link href="/privacy" className="hover:text-primary transition-all">Privacy Protocol</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-all">FAQ & Help</Link></li>
            <li><Link href="/careers" className="hover:text-primary transition-all">Careers</Link></li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1 lg:col-span-1">
          <h4 className="text-foreground font-black uppercase tracking-[0.2em] text-xs mb-6 sm:mb-8">Locations</h4>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-on-surface-variant">
            <li><span className="text-primary font-black uppercase tracking-tighter mr-2">HQ:</span> Jaffna Main St.</li>
            <li><span className="text-primary font-black uppercase tracking-tighter mr-2">Nallur:</span> Temple Rd.</li>
            <li><span className="text-primary font-black uppercase tracking-tighter mr-2">Kondavil:</span> KKS Road.</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
        <span className="text-on-surface-variant text-[10px] tracking-widest font-black uppercase text-center md:text-left">
          © 2024 JK GYM. THE KINETIC ARCHITECT. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-6 sm:gap-8 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-primary">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
