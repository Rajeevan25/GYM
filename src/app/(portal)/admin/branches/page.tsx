import { getCurrentUser } from "@/lib/auth";

export default function AdminBranchesPage() {
  const user = getCurrentUser();
  const isSuperAdmin = user.role === 'SUPER_ADMIN';

  const allBranches = [
    { slug: "jaffna-town", name: "Jaffna Town HQ", address: "Main Street, Jaffna", members: 1240, load: 88, revenue: "582,000", status: "Optimal" },
    { slug: "nallur", name: "Nallur Hub", address: "Temple Road, Nallur", members: 960, load: 62, revenue: "421,500", status: "Scaling" },
    { slug: "kondavil", name: "Kondavil Center", address: "KKS Road, Kondavil", members: 642, load: 45, revenue: "280,080", status: "Growth" },
  ];

  const branches = isSuperAdmin 
    ? allBranches 
    : allBranches.filter(b => user.assignedBranches?.includes(b.slug));

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-primary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Infrastructure Matrix</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Branch <br/><span className="text-primary tracking-normal">{isSuperAdmin ? 'Control' : 'Sector'}</span>
          </h1>
        </div>
        {isSuperAdmin && (
          <button className="kinetic-gradient text-white px-6 sm:px-8 py-4 font-black rounded-xl hover:brightness-110 transition-all shadow-xl text-xs uppercase tracking-widest active:scale-95 duration-200 w-fit">
             Add New Branch
          </button>
        )}
      </header>
// ... rest of the component

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {branches.map((branch, i) => (
          <div key={i} className="bg-surface-container rounded-3xl p-6 sm:p-10 border border-outline-variant/10 shadow-2xl relative group overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors"></div>

             <div className="flex justify-between items-start mb-6 sm:mb-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-surface-container-high flex items-center justify-center border border-primary/20">
                   <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">apartment</span>
                </div>
                <div className="bg-primary/10 text-primary px-3 sm:px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic border border-primary/20">
                   {branch.status}
                </div>
             </div>

             <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2">{branch.name}</h3>
             <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-6 sm:mb-10 italic">{branch.address}</p>

             <div className="space-y-3 sm:space-y-6 mb-8 sm:mb-12">
                <div className="flex justify-between items-center bg-surface-container-low p-3 sm:p-4 rounded-xl border border-white/5">
                   <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Active Athletes</span>
                   <span className="text-lg sm:text-xl font-black italic tracking-tighter">{branch.members}</span>
                </div>
                <div className="flex justify-between items-center bg-surface-container-low p-3 sm:p-4 rounded-xl border border-white/5">
                   <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Cycle Revenue</span>
                   <span className="text-lg sm:text-xl font-black italic tracking-tighter text-primary">Rs. {branch.revenue}</span>
                </div>
             </div>

             <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                   <span className="text-on-surface-variant">Operational Load</span>
                   <span className={branch.load > 80 ? "text-error" : "text-primary italic"}>{branch.load}%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                   <div className={`h-full ${branch.load > 80 ? 'bg-error animate-pulse' : 'bg-primary'} transition-all duration-1000`} style={{ width: `${branch.load}%` }}></div>
                </div>
             </div>

             <button className="w-full mt-6 sm:mt-10 py-3 sm:py-4 border border-outline-variant/30 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all active:scale-95">
                Manage Details
             </button>
          </div>
        ))}
      </div>
    </div>
  );
}
