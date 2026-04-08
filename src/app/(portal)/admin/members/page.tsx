import { AdminNav } from "@/components/admin-panel/nav";

export default function AdminMembersPage() {
  const members = [
    { name: "Alex Rivera", email: "alex.r@gmail.com", tier: "Gold", status: "Active", joined: "Oct 2023", branch: "Town HQ" },
    { name: "Suthan K.", email: "suthan.k@outlook.com", tier: "Pro", status: "Active", joined: "Sep 2023", branch: "Nallur Hub" },
    { name: "Arunan T.", email: "arunan.t@yahoo.com", tier: "Basic", status: "Pending", joined: "Nov 2023", branch: "Town HQ" },
    { name: "Meera S.", email: "meera.s@gmail.com", tier: "Pro", status: "Inactive", joined: "Aug 2023", branch: "Kondavil" },
    { name: "Janith P.", email: "janith.p@gmail.com", tier: "Gold", status: "Active", joined: "Oct 2023", branch: "Town HQ" },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-primary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Athlete Directory</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Member <br/><span className="text-primary tracking-normal">Management</span>
          </h1>
        </div>
         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
           <div className="relative flex-1 sm:min-w-[300px]">
             <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
             <input
               type="text"
               placeholder="SEARCH ATHLETES..."
               className="bg-surface-container-high border-none rounded-xl pl-12 pr-6 py-4 text-xs font-black uppercase tracking-widest focus:ring-primary/50 placeholder:text-on-surface-variant/30 w-full"
             />
          </div>
          <button className="kinetic-gradient text-white px-6 sm:px-8 py-4 font-black rounded-xl hover:brightness-110 transition-all shadow-xl shadow-emerald-900/20 text-xs uppercase tracking-widest active:scale-95 duration-200">
             Register New
          </button>
        </div>
      </header>

      <div className="bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/10 shadow-2xl">
         <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
               <thead>
                  <tr className="bg-surface-container-low/50 text-on-surface-variant text-[10px] uppercase tracking-[0.3em] font-black border-b border-outline-variant/10">
                     <th className="px-4 sm:px-10 py-4 sm:py-6">Athlete Profile</th>
                     <th className="px-4 sm:px-10 py-4 sm:py-6">Tier Level</th>
                     <th className="px-4 sm:px-10 py-4 sm:py-6">Branch Protocol</th>
                     <th className="px-4 sm:px-10 py-4 sm:py-6">Status</th>
                     <th className="px-4 sm:px-10 py-4 sm:py-6 text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-outline-variant/5">
                  {members.map((member, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors cursor-pointer">
                       <td className="px-6 sm:px-10 py-5 sm:py-8">
                          <div className="flex items-center gap-3 sm:gap-4">
                             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-high flex items-center justify-center font-black italic text-primary border border-primary/20 text-sm">
                                {member.name.split(' ').map(n => n[0]).join('')}
                             </div>
                             <div>
                                <p className="font-black italic tracking-tighter uppercase text-base sm:text-lg">{member.name}</p>
                                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest italic">{member.email}</p>
                             </div>
                          </div>
                       </td>
                       <td className="px-6 sm:px-10 py-5 sm:py-8">
                          <span className={`text-[10px] font-black tracking-widest uppercase italic px-3 sm:px-4 py-1.5 rounded-full ${
                             member.tier === 'Gold' ? 'bg-primary/20 text-primary border border-primary/30' :
                             member.tier === 'Pro' ? 'bg-primary/20 text-primary border border-primary/30' :
                             'bg-surface-container-highest text-on-surface-variant border border-white/10'
                          }`}>
                             {member.tier}
                          </span>
                       </td>
                       <td className="px-6 sm:px-10 py-5 sm:py-8">
                          <p className="text-xs sm:text-sm font-bold uppercase tracking-tighter">{member.branch}</p>
                          <p className="text-[8px] text-on-surface-variant font-black uppercase tracking-widest mt-1">Joined {member.joined}</p>
                       </td>
                       <td className="px-6 sm:px-10 py-5 sm:py-8">
                          <div className="flex items-center gap-2">
                             <span className={`w-2 h-2 rounded-full ${
                                member.status === 'Active' ? 'bg-primary' :
                                member.status === 'Pending' ? 'bg-yellow-500 animate-pulse' : 'bg-destructive'
                             }`}></span>
                             <span className="text-[10px] font-black uppercase tracking-widest italic">{member.status}</span>
                          </div>
                       </td>
                       <td className="px-4 sm:px-10 py-5 sm:py-8 text-right">
                          <button className="p-2 sm:p-3 bg-surface-container-high rounded-xl text-on-surface-variant hover:text-primary transition-colors border border-white/10">
                             <span className="material-symbols-outlined text-xl">more_vert</span>
                          </button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
