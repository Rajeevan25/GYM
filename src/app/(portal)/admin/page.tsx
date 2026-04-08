export default function AdminDashboard() {
  const stats = [
    { name: "Total Revenue", value: "Rs. 1,280,430", change: "+12.5%", icon: "payments" },
    { name: "Active Members", value: "2,842", change: "+84% Retention", icon: "group" },
    { name: "New Registrations", value: "142", change: "This Week", icon: "person_add" },
    { name: "Daily Attendance", value: "76.4%", change: "Peak Performance", icon: "analytics" },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Admin Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-primary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Operation: APEX FORGE</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Global <br/><span className="text-primary tracking-normal">Operations</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button className="bg-surface-container-high text-foreground px-4 sm:px-6 py-3 sm:py-4 font-black rounded-xl hover:bg-surface-container-highest transition-colors flex items-center gap-2 text-xs uppercase tracking-widest border border-white/5 shadow-xl">
             <span className="material-symbols-outlined text-sm">download</span> Export Matrix
          </button>
          <button className="kinetic-gradient text-white px-6 sm:px-8 py-3 sm:py-4 font-black rounded-xl hover:brightness-110 transition-all shadow-xl text-xs uppercase tracking-widest active:scale-95 duration-200">
             Sync Branches
          </button>
        </div>
      </header>

      {/* Metrics Matrix */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-surface-container p-5 sm:p-8 rounded-2xl relative overflow-hidden group border border-outline-variant/10 shadow-2xl transition-all hover:-translate-y-1">
             <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-8 -mt-8 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
             <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-surface-container-high rounded-xl border border-white/5">
                   <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">{stat.icon}</span>
                </div>
                <span className="text-primary text-[9px] sm:text-[10px] font-black bg-primary/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full tracking-widest uppercase italic hidden sm:block">{stat.change}</span>
             </div>
             <p className="text-on-surface-variant text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-1 sm:mb-2">{stat.name}</p>
             <p className="text-2xl sm:text-4xl font-black font-headline italic tracking-tighter">{stat.value}</p>
             <span className="text-primary text-[9px] font-black bg-primary/10 px-2 py-1 rounded-full tracking-widest uppercase italic mt-2 block sm:hidden">{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Bento Grid Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

        {/* Financial Momentum Chart (CSS Mock) */}
        <div className="lg:col-span-8 bg-surface-container rounded-3xl p-6 sm:p-10 flex flex-col border border-outline-variant/10 shadow-2xl">
           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
              <div>
                 <h3 className="text-xl sm:text-2xl font-black italic tracking-tighter uppercase">Financial Momentum</h3>
                 <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mt-1 italic">Monthly revenue distribution: All Branches</p>
              </div>
              <select className="bg-surface-container-high border-none text-[10px] font-black uppercase tracking-widest rounded-lg focus:ring-primary/50 text-foreground cursor-pointer px-4 py-3 appearance-none">
                 <option>Last 6 Months</option>
              </select>
           </div>

           <div className="flex-1 flex items-end justify-between gap-2 sm:gap-4 min-h-[200px] sm:min-h-[300px] mb-4">
              {[
                { label: "JAN", h: "60%" },
                { label: "FEB", h: "75%" },
                { label: "MAR", h: "65%" },
                { label: "APR", h: "90%" },
                { label: "MAY", h: "80%" },
                { label: "JUN", h: "100%", highlighted: true },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 sm:gap-4 group cursor-pointer">
                   <div className="w-full bg-surface-container-low rounded-t-xl relative h-full flex flex-col justify-end overflow-hidden">
                      <div
                         className={`w-full transition-all duration-700 group-hover:brightness-125 ${
                           bar.highlighted ? 'kinetic-gradient shadow-[0_0_20px_rgba(142,255,113,0.3)]' : 'bg-primary/20'
                         }`}
                         style={{ height: bar.h }}
                      ></div>
                   </div>
                   <span className={`text-[9px] sm:text-[10px] font-black tracking-widest ${bar.highlighted ? 'text-primary' : 'text-on-surface-variant'}`}>{bar.label}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Real-time Activity Logs */}
        <div className="lg:col-span-4 bg-surface-container-low rounded-3xl p-6 sm:p-10 flex flex-col border border-outline-variant/10 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-5">
              <span className="material-symbols-outlined text-[8rem] text-primary">history</span>
           </div>
           <div className="flex justify-between items-center mb-6 sm:mb-10 relative z-10">
              <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter">Live Activity</h3>
              <span className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline cursor-pointer">View All</span>
           </div>

           <div className="space-y-6 sm:space-y-8 flex-1 overflow-y-auto pr-2 relative z-10 custom-scrollbar">
              {[
                { name: "Marcus Vane", action: "Started Platinum Membership", loc: "Town HQ", time: "2 mins ago", icon: "person_add", color: "text-primary" },
                { name: "Payment Received", action: "Rs. 24,500.00 Credit", loc: "Nallur Hub", time: "14 mins ago", icon: "check_circle", color: "text-primary" },
                { name: "Attendance Alert", action: "Peak Capacity Reached", loc: "Kondavil Center", time: "45 mins ago", icon: "warning", color: "text-error" },
                { name: "New Trainer", action: "Sarah J. Onboarded", loc: "Town HQ", time: "2 hours ago", icon: "fitness_center", color: "text-primary" },
              ].map((activity, i) => (
                <div key={i} className="flex gap-4 sm:gap-5 group">
                   <div className={`min-w-9 h-9 sm:min-w-10 sm:h-10 rounded-xl bg-surface-container flex items-center justify-center border border-white/5 transition-all group-hover:scale-110 ${activity.color}`}>
                      <span className="material-symbols-outlined text-lg sm:text-xl">{activity.icon}</span>
                   </div>
                   <div>
                      <p className="text-sm font-bold uppercase tracking-tighter leading-tight">{activity.name}</p>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1 italic">{activity.action}</p>
                      <p className="text-[8px] text-on-surface-variant/50 font-black mt-2 uppercase tracking-widest">{activity.loc} • {activity.time}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Global Branch Performance Table */}
        <div className="lg:col-span-12 bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/10 shadow-2xl">
           <div className="px-6 sm:px-10 py-6 sm:py-8 border-b border-outline-variant/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
              <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter">Branch Performance</h3>
              <div className="flex gap-3 sm:gap-4">
                 <button className="p-2 sm:p-3 bg-surface-container-high rounded-xl text-on-surface-variant hover:text-primary transition-colors border border-white/5">
                    <span className="material-symbols-outlined text-xl">filter_list</span>
                 </button>
                 <button className="p-2 sm:p-3 bg-surface-container-high rounded-xl text-on-surface-variant hover:text-primary transition-colors border border-white/5">
                    <span className="material-symbols-outlined text-xl">refresh</span>
                 </button>
              </div>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                 <thead>
                    <tr className="bg-surface-container-low/50 text-on-surface-variant text-[10px] uppercase tracking-[0.3em] font-black border-b border-outline-variant/10">
                       <th className="px-6 sm:px-10 py-4 sm:py-6">Branch Protocol</th>
                       <th className="px-6 sm:px-10 py-4 sm:py-6 text-center">Active Assets</th>
                       <th className="px-6 sm:px-10 py-4 sm:py-6">Operational Load</th>
                       <th className="px-6 sm:px-10 py-4 sm:py-6">Cycle Revenue</th>
                       <th className="px-6 sm:px-10 py-4 sm:py-6 text-right">System Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-outline-variant/5">
                    {[
                      { name: "Downtown Apex", sub: "Town HQ", members: "1,240", cap: 92, rev: "Rs. 582,000", status: "Optimal", color: "primary" },
                      { name: "Uptown Elite", sub: "Nallur Hub", members: "960", cap: 64, rev: "Rs. 421,500", status: "Steady", color: "primary" },
                      { name: "Suburban Flow", sub: "Kondavil Center", members: "642", cap: 41, rev: "Rs. 280,080", status: "Growth", color: "primary" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-primary/5 transition-colors cursor-pointer group">
                         <td className="px-6 sm:px-10 py-5 sm:py-8">
                            <div className="flex items-center gap-4 sm:gap-5">
                               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container-high flex items-center justify-center border border-white/10">
                                  <span className={`material-symbols-outlined text-xl sm:text-2xl text-${row.color}`}>apartment</span>
                               </div>
                               <div>
                                  <p className="font-black italic tracking-tighter uppercase text-base sm:text-lg">{row.name}</p>
                                  <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest italic">{row.sub}</p>
                               </div>
                            </div>
                         </td>
                         <td className="px-6 sm:px-10 py-5 sm:py-8 text-center font-black italic text-lg sm:text-xl tracking-tighter">{row.members}</td>
                         <td className="px-6 sm:px-10 py-5 sm:py-8">
                            <div className="max-w-[120px] sm:max-w-[140px]">
                               <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                                  <span className="opacity-50">Load</span>
                                  <span className={row.cap > 80 ? "text-error" : "text-primary"}>{row.cap}%</span>
                               </div>
                               <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                                  <div className={`h-full ${row.cap > 80 ? 'bg-error animate-pulse' : 'bg-primary'}`} style={{ width: `${row.cap}%` }}></div>
                               </div>
                            </div>
                         </td>
                         <td className="px-6 sm:px-10 py-5 sm:py-8 font-black text-primary italic text-lg sm:text-xl tracking-tighter">{row.rev}</td>
                         <td className="px-6 sm:px-10 py-5 sm:py-8 text-right">
                            <span className="bg-surface-container-high text-primary border border-primary/20 text-[10px] font-black px-3 sm:px-4 py-2 rounded-lg uppercase tracking-widest italic">{row.status}</span>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

      </div>
    </div>
  );
}
