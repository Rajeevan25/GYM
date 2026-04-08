import { getCurrentUser } from "@/lib/auth";
import { BRANCHES, SCHEDULE } from "@/lib/data";

export default function TrainerSchedulePage() {
  const user = getCurrentUser();
  const assignedBranches = BRANCHES.filter(b => user.assignedBranches?.includes(b.slug));
  const trainerClasses = SCHEDULE.filter(s => s.trainer === user.name);

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-secondary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Class Roster</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             My <span className="text-secondary tracking-normal">Classes</span>
          </h1>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {trainerClasses.length > 0 ? (
          trainerClasses.map((cls, i) => {
            const branchName = BRANCHES.find(b => b.slug === cls.branch)?.name || cls.branch;
            return (
              <div
                key={i}
                className="p-5 sm:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-8 border transition-all bg-surface-container border-white/5 hover:bg-surface-container-high"
              >
                <div className="flex items-center gap-4 sm:gap-8 w-full md:w-auto">
                   <div className="text-xl sm:text-3xl font-black italic tracking-tighter uppercase font-headline w-24 sm:w-32 flex-shrink-0 text-secondary">{cls.time}</div>
                   <div className="h-10 w-0.5 bg-outline-variant/20 hidden md:block flex-shrink-0"></div>
                   <div>
                      <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter">{cls.name}</h3>
                      <div className="flex flex-col gap-1 mt-1">
                        <div className="flex items-center gap-2 text-primary/60">
                           <span className="material-symbols-outlined text-sm">location_on</span>
                           <span className="text-[10px] font-black uppercase tracking-widest leading-none">Branch: {branchName}</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant">
                           <span className="material-symbols-outlined text-sm">today</span>
                           <span className="text-[10px] font-black uppercase tracking-widest leading-none">Days: {cls.days.join(", ")}</span>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
                   <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-lg shadow-secondary/10 bg-secondary text-secondary-foreground hover:scale-105 active:scale-95">
                      View Details
                   </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-20 text-center bg-surface-container rounded-3xl border border-dashed border-outline-variant/20">
            <p className="text-on-surface-variant font-black uppercase tracking-widest">No classes assigned yet.</p>
          </div>
        )}
      </div>

    </div>
  );
}
