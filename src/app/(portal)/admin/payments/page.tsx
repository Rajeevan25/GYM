export default function AdminPaymentsPage() {
  const transactions = [
    { id: "TX-9942", member: "Alex Rivera", amount: "6,500.00", status: "Completed", method: "Visa", date: "Oct 24, 2023" },
    { id: "TX-9941", member: "Suthan K.", amount: "3,500.00", status: "Completed", method: "Bank Transfer", date: "Oct 23, 2023" },
    { id: "TX-9940", member: "Janith P.", amount: "12,000.00", status: "Processing", method: "Amex", date: "Oct 22, 2023" },
    { id: "TX-9939", member: "Aarthy T.", amount: "6,500.00", status: "Failed", method: "Visa", date: "Oct 21, 2023" },
    { id: "TX-9938", member: "Ravi S.", amount: "6,500.00", status: "Completed", method: "Mastercard", date: "Oct 20, 2023" },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-primary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Financial Ledger</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Cycle <br/><span className="text-primary tracking-normal">Revenue</span>
          </h1>
        </div>
        <div className="flex bg-surface-container rounded-xl p-1 border border-white/5 w-fit">
           <button className="kinetic-gradient text-white px-4 sm:px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest italic shadow-lg">Current Cycle</button>
           <button className="text-on-surface-variant px-4 sm:px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:text-foreground">Archived</button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
           <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-2">Cycle Revenue</p>
           <p className="text-3xl sm:text-4xl font-black font-headline italic tracking-tighter">Rs. 1.28M</p>
           <div className="text-primary text-[10px] font-black italic tracking-widest mt-4 sm:mt-6 uppercase leading-none">+12.5% vs Last Cycle</div>
        </div>
        <div className="bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
           <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-2">Failed Trans.</p>
           <p className="text-3xl sm:text-4xl font-black font-headline italic tracking-tighter text-error">Rs. 42,000</p>
           <div className="text-on-surface-variant/50 text-[10px] font-black italic tracking-widest mt-4 sm:mt-6 uppercase leading-none">3 Actions Required</div>
        </div>
        <div className="bg-surface-container p-6 sm:p-8 rounded-2xl border border-outline-variant/10 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
           <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-2">Operational Costs</p>
           <p className="text-3xl sm:text-4xl font-black font-headline italic tracking-tighter">Rs. 240,000</p>
           <div className="text-on-surface-variant text-[10px] font-black italic tracking-widest mt-4 sm:mt-6 uppercase leading-none">Balanced Loads Active</div>
        </div>
      </div>

      <div className="bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/10 shadow-2xl">
         <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
               <thead>
                  <tr className="bg-surface-container-low/50 text-on-surface-variant text-[10px] uppercase tracking-[0.3em] font-black border-b border-outline-variant/10">
                     <th className="px-6 lg:px-10 py-4 sm:py-6">Ledger ID</th>
                     <th className="px-6 lg:px-10 py-4 sm:py-6">Athlete</th>
                     <th className="px-6 lg:px-10 py-4 sm:py-6">Amount (Rs.)</th>
                     <th className="px-6 lg:px-10 py-4 sm:py-6 text-center">Status</th>
                     <th className="px-6 lg:px-10 py-4 sm:py-6 text-right">Method</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-outline-variant/5">
                  {transactions.map((tx, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors cursor-pointer group">
                       <td className="px-6 lg:px-10 py-5 sm:py-8">
                          <p className="text-xs font-black uppercase tracking-widest mb-1">{tx.id}</p>
                          <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest italic">{tx.date}</p>
                       </td>
                       <td className="px-6 lg:px-10 py-5 sm:py-8">
                          <p className="font-black italic tracking-tighter uppercase text-base sm:text-lg group-hover:text-primary transition-colors">{tx.member}</p>
                       </td>
                       <td className="px-6 lg:px-10 py-5 sm:py-8 font-black text-lg sm:text-xl italic tracking-tighter">{tx.amount}</td>
                       <td className="px-6 lg:px-10 py-5 sm:py-8 text-center">
                          <div className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic border inline-block ${
                             tx.status === 'Completed' ? 'bg-primary/10 text-primary border-primary/20' :
                             tx.status === 'Processing' ? 'bg-primary/10 text-primary border-primary/20 animate-pulse' :
                             'bg-destructive/10 text-error border-destructive/20'
                          }`}>
                             {tx.status}
                          </div>
                       </td>
                       <td className="px-6 lg:px-10 py-5 sm:py-8 text-right text-on-surface-variant font-black uppercase tracking-widest text-[10px] italic">
                          {tx.method}
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
