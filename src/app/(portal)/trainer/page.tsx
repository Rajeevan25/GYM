import { getCurrentUser } from "@/lib/auth";
import { BRANCHES, SCHEDULE, MOCK_USERS } from "@/lib/data";

export default function TrainerDashboard() {
  const user = getCurrentUser();
  const assignedBranches = BRANCHES.filter(b => user.assignedBranches?.includes(b.slug));
  const trainerClasses = SCHEDULE.filter(s => s.trainer === user.name);
  const assignedAthletes = MOCK_USERS.filter(u => 
    u.role === 'MEMBER' && 
    user.assignedBranches?.includes(u.homeBranch!)
  );

  const nextClass = trainerClasses[0]; // Simple logic for "Next Session"

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col lg:flex-row justify-between lg:items-end gap-3 sm:gap-4">
        <div>
          <p className="text-secondary font-black tracking-widest text-[10px] uppercase mb-2">Architect Portal</p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter text-foreground uppercase italic">
            Command, <span className="text-secondary">{user.name.split(' ')[0]}</span>
          </h2>
        </div>
        <div className="text-left lg:text-right">
          <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest">Active Sectors</p>
          <div className="flex gap-2 lg:justify-end mt-1">
            {assignedBranches.map(b => (
              <span key={b.slug} className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest italic">
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Quick Stats */}
        <div className="bg-surface-container rounded-3xl p-6 sm:p-10 border border-white/5 flex flex-col justify-between min-h-[200px]">
            <div>
              <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-2">Today's Sessions</p>
              <h3 className="text-5xl font-black italic tracking-tighter text-secondary">
                {trainerClasses.length.toString().padStart(2, '0')}
              </h3>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
              <span>Next: {nextClass?.time || "N/A"}</span>
              <span className="text-secondary">{nextClass ? "Ready" : "None"}</span>
            </div>
        </div>

        <div className="bg-surface-container rounded-3xl p-6 sm:p-10 border border-white/5 flex flex-col justify-between min-h-[200px]">
            <div>
              <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-2">Assigned Athletes</p>
              <h3 className="text-5xl font-black italic tracking-tighter">{assignedAthletes.length}</h3>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
              <span>Across {user.assignedBranches?.length} Branches</span>
              <span className="text-primary italic">Growing</span>
            </div>
        </div>

        <div className="bg-surface-container rounded-3xl p-6 sm:p-10 border border-white/5 flex flex-col justify-between min-h-[200px] relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-6 opacity-10">
              <span className="material-symbols-outlined text-6xl text-secondary">campaign</span>
           </div>
           <div>
              <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-2">Branch Dispatch</p>
              <p className="text-sm font-bold leading-tight uppercase italic text-foreground/80">Maintenance scheduled for Jaffna HQ tomorrow morning.</p>
           </div>
           <button className="text-secondary text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mt-4">
              VIEW ANNOUNCEMENTS
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
           </button>
        </div>
      </div>

      {/* Class Matrix */}
      <section className="bg-surface-container-low rounded-3xl p-6 sm:p-10 border border-white/5">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter">Your Architectural Matrix</h3>
          <button className="text-[10px] font-black uppercase tracking-widest text-secondary border border-secondary/20 px-6 py-2 rounded-lg hover:bg-secondary/5 transition-all">
            MANAGE ALL CLASSES
          </button>
        </div>

        <div className="space-y-4">
          {trainerClasses.map((cls, i) => (
            <div key={i} className="bg-surface-container rounded-2xl p-5 sm:p-6 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="text-2xl font-black italic tracking-tighter w-24">{cls.time}</div>
                <div className="h-8 w-0.5 bg-white/5 hidden md:block"></div>
                <div>
                  <h4 className="font-black italic uppercase tracking-tighter text-lg">{cls.name}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant italic">
                    {BRANCHES.find(b => b.slug === cls.branch)?.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-surface-container-high px-4 py-2 rounded-lg border border-white/5 text-[9px] font-black uppercase tracking-widest">
                  ATHLETES: <span className="text-foreground">24/30</span>
                </div>
                <button className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-secondary/10">
                  MARK ATTENDANCE
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
