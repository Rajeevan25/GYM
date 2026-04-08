import { BRANCHES } from "@/lib/data";
import Link from "next/link";

export function PublicBranches() {

  return (
    <section className="bg-surface-container-low py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-20 gap-6 sm:gap-8">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter mb-3 sm:mb-4">Our <span className="text-primary tracking-widest">Branches</span></h2>
            <p className="text-on-surface-variant text-sm sm:text-lg">Strategically located kinetic playgrounds across Jaffna.</p>
          </div>
          <div className="hidden md:block opacity-5">
            <span className="material-symbols-outlined text-[8rem] text-primary">map</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {BRANCHES.map((branch, index) => (
            <Link key={index} href={`/branches/${branch.slug}`} className="group cursor-pointer block">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 sm:mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 border border-outline-variant/20 shadow-xl relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={branch.image}
                  alt={branch.name}
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-primary/10 transition-colors duration-700"></div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter group-hover:text-primary transition-colors flex justify-between items-center">
                {branch.name}
                <span className="material-symbols-outlined text-primary scale-0 group-hover:scale-100 transition-all duration-300">arrow_forward_ios</span>
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm font-bold uppercase tracking-widest mt-2">{branch.address}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
