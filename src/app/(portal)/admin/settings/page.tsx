export default function AdminSettingsPage() {
  const sections = [
    {
       title: "Operational Matrix",
       icon: "settings_suggest",
       sub: "Global gym hours and occupancy limits",
       options: ["Operating Hours", "Peak Hours Mitigation", "Emergency protocols"]
    },
    {
       title: "Financial Protocol",
       icon: "account_balance_wallet",
       sub: "Taxation, currency, and invoice headers",
       options: ["GST / VAT Configuration", "Default Matrix Currency", "SaaS Billing Integrated"]
    },
    {
       title: "Communication Mesh",
       icon: "hub",
       sub: "SMS & Email notification triggers",
       options: ["Member Welcome Triggers", "Payment Overdue Alerts", "Branch Broadcasts"]
    },
    {
       title: "Infrastructure Security",
       icon: "admin_panel_settings",
       sub: "Staff access levels and audit logs",
       options: ["Role-based Permissions", "Access Log Archiving", "System Recovery Path"]
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-on-surface-variant font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">System Core</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Global <br/><span className="text-foreground tracking-normal">Architecture</span>
          </h1>
        </div>
        <button className="kinetic-gradient text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-emerald-900/20 active:scale-95 duration-200 w-fit">
           Deploy Global Update
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {sections.map((section, i) => (
          <div key={i} className="bg-surface-container rounded-3xl p-6 sm:p-10 border border-outline-variant/10 shadow-2xl group hover:border-primary/20 transition-all">
             <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-surface-container-high flex items-center justify-center border border-white/5 transition-all group-hover:scale-110">
                   <span className="material-symbols-outlined text-emerald-500 text-2xl sm:text-3xl">{section.icon}</span>
                </div>
                <div>
                   <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter">{section.title}</h3>
                   <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest italic">{section.sub}</p>
                </div>
             </div>

             <div className="space-y-3 sm:space-y-4">
                {section.options.map((option, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-surface-container-low p-4 sm:p-6 rounded-2xl border border-white/5 group/opt hover:bg-surface-container-highest cursor-pointer">
                     <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant group-hover/opt:text-foreground transition-colors">{option}</span>
                     <span className="material-symbols-outlined text-on-surface-variant/30 group-hover/opt:text-emerald-500 text-xl transition-colors">tune</span>
                  </div>
                ))}
             </div>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 bg-destructive/5 rounded-3xl p-8 sm:p-12 border border-destructive/20 relative overflow-hidden group">
         <div className="absolute right-0 top-1/2 -translate-y-1/2 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[1.7]">
            <span className="material-symbols-outlined text-[12rem] text-destructive">dangerous</span>
         </div>
         <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter mb-3 sm:mb-4 text-destructive">Danger Protocol</h3>
         <p className="text-on-surface-variant text-sm font-medium leading-relaxed font-body mb-8 sm:mb-10 max-w-2xl">
            Initializing system nuclear-level commands. Actions performed in this section are irreversible and affect all kinetic branches in Jaffna.
         </p>
         <div className="flex flex-wrap gap-4 sm:gap-6">
            <button className="bg-destructive text-destructive-foreground px-6 sm:px-8 py-4 font-black rounded-xl text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all">
               Purge Database
            </button>
            <button className="bg-transparent border border-destructive/30 text-destructive px-6 sm:px-8 py-4 font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-destructive/5 transition-all active:scale-95">
               Reset System Matrix
            </button>
         </div>
      </div>
    </div>
  );
}
