import { getCurrentUser } from "@/lib/auth";
import { BRANCHES, MOCK_USERS } from "@/lib/data";

export default function TrainerMembersPage() {
  const user = getCurrentUser();
  // Filter members who belong to one of the trainer's assigned branches
  const branchMembers = MOCK_USERS.filter(u => 
    u.role === 'MEMBER' && 
    user.assignedBranches?.includes(u.homeBranch!)
  );

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-secondary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Athlete Roster</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Assigned <span className="text-secondary tracking-normal">Athletes</span>
          </h1>
        </div>
        <div className="bg-surface-container rounded-xl p-3 border border-white/5 flex items-center gap-4">
          <input 
            type="text" 
            placeholder="Search athletes..." 
            className="bg-transparent border-none outline-none text-xs font-bold uppercase tracking-widest text-foreground placeholder:text-on-surface-variant/50 w-48"
          />
          <span className="material-symbols-outlined text-secondary">search</span>
        </div>
      </header>

      <div className="bg-surface-container rounded-3xl overflow-hidden border border-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high border-b border-white/5">
                <th className="p-4 sm:p-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Athlete Name</th>
                <th className="p-4 sm:p-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Branch</th>
                <th className="p-4 sm:p-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Status</th>
                <th className="p-4 sm:p-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {branchMembers.length > 0 ? (
                branchMembers.map(member => (
                  <tr key={member.id} className="border-b border-white/5 hover:bg-surface-container-low transition-colors">
                    <td className="p-4 sm:p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-secondary">person</span>
                        </div>
                        <div>
                          <p className="font-bold uppercase tracking-widest">{member.name}</p>
                          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant">
                        {BRANCHES.find(b => b.slug === member.homeBranch)?.name || "Unknown"}
                      </span>
                    </td>
                    <td className="p-4 sm:p-6">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">Active</span>
                    </td>
                    <td className="p-4 sm:p-6 text-right">
                      <button className="text-secondary text-[10px] font-black uppercase tracking-widest hover:italic transition-all">View Plan</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-10 text-center text-on-surface-variant font-black uppercase tracking-widest">
                    No athletes assigned to your sectors yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
