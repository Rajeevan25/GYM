export default function AdminAttendancePage() {
  const logs = [
    { name: "Alex Rivera", time: "17:42 PM", branch: "Town HQ", method: "QR Scan", status: "In" },
    { name: "Suthan K.", time: "16:15 PM", branch: "Nallur HUB", method: "Staff Entry", status: "In" },
    { name: "Janith P.", time: "15:30 PM", branch: "Town HQ", method: "QR Scan", status: "Out" },
    { name: "Aarthy T.", time: "14:10 PM", branch: "Kondavil", method: "QR Scan", status: "In" },
    { name: "Meera S.", time: "11:45 AM", branch: "Town HQ", method: "QR Scan", status: "Out" },
    { name: "Arunan S.", time: "09:00 AM", branch: "Nallur HUB", method: "Biometric", status: "In" },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-primary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Real-time Metrics</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Attendance <br/><span className="text-primary tracking-normal">Logs</span>
          </h1>
        </div>
        <div className="flex gap-3 sm:gap-4">
           <button className="bg-surface-container-high text-foreground px-4 sm:px-6 py-3 sm:py-4 font-black rounded-xl border border-white/5 text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 sm:gap-3">
              <span className="material-symbols-outlined text-sm">print</span>
              Export Report
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
         <div className="bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 shadow-2xl">
            <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-1">Active Athletes Now</p>
            <p className="text-3xl sm:text-4xl font-black font-headline italic tracking-tighter">842</p>
            <div className="h-1 w-full bg-primary/20 rounded-full mt-4 sm:mt-6 overflow-hidden">
               <div className="h-full bg-primary w-[84%] animate-pulse"></div>
            </div>
         </div>
         <div className="bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 shadow-2xl">
            <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-1">Peak Attendance</p>
            <p className="text-3xl sm:text-4xl font-black font-headline italic tracking-tighter">19:30 PM</p>
            <div className="text-on-surface-variant text-[10px] font-black italic tracking-widest mt-4 sm:mt-6 uppercase leading-none">Expected: 22:00 PM</div>
         </div>
         <div className="bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 shadow-2xl">
            <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-1">Branch HQ Load</p>
            <p className="text-3xl sm:text-4xl font-black font-headline italic tracking-tighter">92%</p>
            <div className="text-error text-[10px] font-black italic tracking-widest mt-4 sm:mt-6 uppercase leading-none">⚠️ High Capacity Warning</div>
         </div>
      </div>

      <div className="bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/10 shadow-2xl">
         <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
               <thead>
                  <tr className="bg-surface-container-low/50 text-on-surface-variant text-[10px] uppercase tracking-[0.3em] font-black border-b border-outline-variant/10">
                     <th className="px-6 lg:px-10 py-4 sm:py-6">Athlete</th>
                     <th className="px-6 lg:px-10 py-4 sm:py-6">Branch</th>
                     <th className="px-6 lg:px-10 py-4 sm:py-6">Method</th>
                     <th className="px-6 lg:px-10 py-4 sm:py-6">Timestamp</th>
                     <th className="px-6 lg:px-10 py-4 sm:py-6 text-right">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-outline-variant/5">
                  {logs.map((log, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors cursor-pointer group">
                       <td className="px-6 lg:px-10 py-5 sm:py-8">
                          <p className="font-black italic tracking-tighter uppercase text-base sm:text-lg group-hover:text-primary transition-colors">{log.name}</p>
                       </td>
                       <td className="px-6 lg:px-10 py-5 sm:py-8">
                          <p className="text-xs font-bold uppercase tracking-tighter">{log.branch}</p>
                       </td>
                       <td className="px-6 lg:px-10 py-5 sm:py-8">
                          <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest italic">{log.method}</p>
                       </td>
                       <td className="px-6 lg:px-10 py-5 sm:py-8 font-black text-lg sm:text-xl italic tracking-tighter">{log.time}</td>
                       <td className="px-6 lg:px-10 py-5 sm:py-8 text-right">
                          <span className={`${log.status === 'In' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-destructive/10 text-error border-destructive/20'} border px-3 sm:px-4 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest italic`}>
                             {log.status === 'In' ? 'ACTIVE' : 'TERMINATED'}
                          </span>
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
