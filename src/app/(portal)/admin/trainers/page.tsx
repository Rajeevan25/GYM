export default function AdminTrainersPage() {
  const trainers = [
    { name: "Kumar J.", role: "Head of Strength", specialty: "Bodybuilding", status: "Active", clients: 24, shift: "Morning" },
    { name: "Sarah L.", role: "Kinetic Specialist", specialty: "Yoga & Recovery", status: "Active", clients: 18, shift: "Evenings" },
    { name: "Arunan S.", role: "Performance Coach", specialty: "HIIT & Cardio", status: "On Leave", clients: 12, shift: "Morning" },
    { name: "Vane M.", role: "Elite Architect", specialty: "Powerlifting", status: "Active", clients: 30, shift: "Full-day" },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-primary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Staff Registry</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Kinetic <br/><span className="text-primary tracking-normal">Architects</span>
          </h1>
        </div>
        <button className="kinetic-gradient text-white px-6 sm:px-8 py-4 font-black rounded-xl hover:brightness-110 transition-all shadow-xl text-xs uppercase tracking-widest active:scale-95 duration-200 w-fit">
           Commission New Architect
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
         {trainers.map((trainer, i) => (
            <div key={i} className="bg-surface-container rounded-3xl p-6 sm:p-8 border border-outline-variant/10 shadow-2xl relative group overflow-hidden">
               <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-surface-container-high overflow-hidden border border-primary/20 grayscale group-hover:grayscale-0 transition-all">
                     <img
                        src={`/images/trainer.jpg`}
                        alt={trainer.name}
                        className="w-full h-full object-cover"
                     />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest italic border ${
                     trainer.status === 'Active' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-destructive/10 text-error border-destructive/20'
                  }`}>
                     {trainer.status}
                  </div>
               </div>

               <h3 className="text-xl sm:text-2xl font-black italic tracking-tighter uppercase mb-1">{trainer.name}</h3>
               <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-4 italic">{trainer.role}</p>

               <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-white/5 mt-4 sm:mt-6">
                  <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-on-surface-variant">
                     <span>Specialization</span>
                     <span className="text-foreground">{trainer.specialty}</span>
                  </div>
                  <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-on-surface-variant">
                     <span>Client Load</span>
                     <span className="text-foreground">{trainer.clients} Active</span>
                  </div>
               </div>

               <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden mt-6 sm:mt-8">
                  <div className="h-full bg-primary" style={{ width: `${(trainer.clients / 40) * 100}%` }}></div>
               </div>

               <button className="w-full mt-6 sm:mt-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[8px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  View Performance
               </button>
            </div>
         ))}
      </div>
    </div>
  );
}
