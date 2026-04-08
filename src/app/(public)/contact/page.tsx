import { BRANCHES } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-32">
      <section className="no-border-section max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase italic underline underline-offset-4">Secure Channel Initialized</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black italic uppercase tracking-tighter mb-8 sm:mb-12 font-headline leading-none">
          Contact <br/><span className="text-primary tracking-widest font-headline">Center</span>
        </h1>
        <p className="text-on-surface-variant text-base sm:text-xl lg:text-2xl max-w-3xl mx-auto font-body font-medium leading-relaxed">
          The hub for all structural inquiries. Connect with our architects or find your nearest kinetic playground.
        </p>
      </section>

      <section className="no-border-section max-w-7xl mx-auto py-12 sm:py-20 lg:py-32 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-24">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container rounded-3xl p-8 sm:p-12 border border-outline-variant/10 shadow-2xl relative">
               <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-12 flex items-center gap-4">
                 <span className="material-symbols-outlined text-primary">mail</span>
                 Inquiry Protocol
               </h3>
               <form className="space-y-8 sm:space-y-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                     <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-1">Full Name</label>
                        <input 
                           type="text" 
                           placeholder="ARCHITECT NAME" 
                           className="bg-surface-container-high border-b-2 border-outline-variant/20 focus:border-primary outline-none py-4 px-6 text-sm font-black tracking-widest uppercase transition-all rounded-t-xl"
                        />
                     </div>
                     <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-1">Secure Email</label>
                        <input 
                           type="email" 
                           placeholder="EMAIL@PROTOCOL.COM" 
                           className="bg-surface-container-high border-b-2 border-outline-variant/20 focus:border-primary outline-none py-4 px-6 text-sm font-black tracking-widest uppercase transition-all rounded-t-xl"
                        />
                     </div>
                  </div>
                  <div className="flex flex-col gap-3">
                     <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-1">Subject</label>
                     <select className="bg-surface-container-high border-b-2 border-outline-variant/20 focus:border-primary outline-none py-4 px-6 text-sm font-black tracking-widest uppercase transition-all rounded-t-xl appearance-none">
                        <option>GENERAL INQUIRY</option>
                        <option>MEMBERSHIP PROTOCOL</option>
                        <option>TRAINER PARTNERSHIP</option>
                        <option>BRANCH SPECIFIC</option>
                     </select>
                  </div>
                  <div className="flex flex-col gap-3">
                     <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-1">Message Transmission</label>
                     <textarea 
                        rows={5}
                        placeholder="ENTER PROTOCOL DETAILS..." 
                        className="bg-surface-container-high border-b-2 border-outline-variant/20 focus:border-primary outline-none py-4 px-6 text-sm font-black tracking-widest uppercase transition-all rounded-t-xl resize-none"
                     ></textarea>
                  </div>
                  <button className="kinetic-gradient text-white w-full py-4 sm:py-6 rounded-2xl font-black tracking-tighter uppercase text-center text-xl active:scale-[0.98] transition-all">
                     SEND TRANSMISSION
                  </button>
               </form>
            </div>
          </div>

          {/* Right Column: Branch Info */}
          <div className="lg:col-span-5 flex flex-col gap-12 sm:gap-16">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter flex items-center gap-6">
              <span className="material-symbols-outlined text-primary text-3xl">hub</span>
              Global Nodes
            </h3>
            <div className="space-y-8 sm:space-y-12">
               {BRANCHES.map((branch) => (
                  <div key={branch.slug} className="group flex flex-col gap-4 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10 hover:border-secondary transition-all shadow-xl">
                     <div className="flex justify-between items-center">
                        <h4 className="text-xl font-black italic uppercase tracking-tighter">{branch.name}</h4>
                        <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">call</span>
                     </div>
                     <p className="text-secondary text-2xl font-black italic tracking-tighter">{branch.phone}</p>
                     <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest leading-relaxed">{branch.address}</p>
                  </div>
               ))}
            </div>

            <div className="mt-8 p-12 bg-primary/5 rounded-3xl border border-primary/10 text-center">
               <span className="material-symbols-outlined text-5xl text-primary mb-6">support_agent</span>
               <h4 className="text-lg font-black uppercase tracking-widest mb-4">Elite Support</h4>
               <p className="text-on-surface-variant text-xs leading-relaxed uppercase tracking-widest font-medium opacity-60">Available during all protocol hours for advanced structural assistance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
