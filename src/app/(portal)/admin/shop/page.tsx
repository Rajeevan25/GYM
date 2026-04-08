export default function AdminShopManagementPage() {
  const inventory = [
    { name: "Whey Isolate", sku: "SUP-001", stock: 42, threshold: 10, price: "8,500.00", status: "In Stock" },
    { name: "Pre-Workout", sku: "SUP-002", stock: 8, threshold: 15, price: "5,200.00", status: "Low Stock" },
    { name: "BCAA Matrix", sku: "SUP-003", stock: 112, threshold: 20, price: "4,500.00", status: "In Stock" },
    { name: "Creatine Pure", sku: "SUP-004", stock: 5, threshold: 10, price: "3,800.00", status: "Critical" },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-primary font-black tracking-[0.25em] text-[10px] uppercase mb-2 italic">Logistics Control</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.85]">
             Inventory <br/><span className="text-primary tracking-normal">Matrix</span>
          </h1>
        </div>
        <div className="flex gap-3 sm:gap-4">
           <button className="kinetic-gradient text-white px-6 sm:px-8 py-4 font-black rounded-xl hover:brightness-110 transition-all shadow-xl text-xs uppercase tracking-widest active:scale-95 duration-200">
              Bulk Restock Protocol
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
         {inventory.map((item, i) => (
            <div key={i} className="bg-surface-container rounded-3xl p-6 sm:p-8 border border-outline-variant/10 shadow-2xl relative overflow-hidden group">
               <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-surface-container-high flex items-center justify-center border border-primary/20">
                     <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">inventory_2</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest italic border ${
                     item.status === 'In Stock' ? 'bg-primary/10 text-primary border-primary/20' :
                     item.status === 'Low Stock' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                     'bg-destructive/10 text-error border-destructive/20'
                  }`}>
                     {item.status}
                  </div>
               </div>

               <h3 className="text-xl sm:text-2xl font-black italic tracking-tighter uppercase mb-1">{item.name}</h3>
               <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mb-4 sm:mb-6 italic">SKU: {item.sku}</p>

               <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-white/5 mt-4 sm:mt-6">
                  <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-on-surface-variant">
                     <span>Current Stock</span>
                     <span className={`text-lg sm:text-xl font-black italic tracking-tighter ${item.stock < item.threshold ? 'text-error' : 'text-foreground'}`}>
                        {item.stock} UNITS
                     </span>
                  </div>
                  <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-on-surface-variant">
                     <span>Unit Price</span>
                     <span className="text-foreground">Rs. {item.price}</span>
                  </div>
               </div>

               <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden mt-6 sm:mt-8">
                  <div
                    className={`h-full ${item.stock < item.threshold ? 'bg-error animate-pulse' : 'bg-primary'}`}
                    style={{ width: `${Math.min((item.stock / 100) * 100, 100)}%` }}
                  ></div>
               </div>

               <button className="w-full mt-6 sm:mt-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[8px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  Adjust Supply
               </button>
            </div>
         ))}
      </div>

      <div className="bg-surface-container-low p-6 sm:p-10 rounded-3xl border border-outline-variant/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">
         <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter mb-3 sm:mb-4 text-primary">Advanced Fulfillment</h3>
            <p className="text-on-surface-variant text-sm font-medium leading-relaxed font-body mb-6 sm:mb-8">
               Automated restock triggers are active for the Jaffna Town HQ.
               System-wide inventory levels are synchronized with current member consumption rates.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
               <button className="kinetic-gradient text-white px-6 sm:px-8 py-4 font-black rounded-xl text-[10px] uppercase tracking-widest shadow-xl">
                  Inventory Analytics
               </button>
               <button className="bg-transparent border border-outline-variant/30 text-on-surface-variant px-6 sm:px-8 py-4 font-black rounded-xl text-[10px] uppercase tracking-widest">
                  Supplier Matrix
               </button>
            </div>
         </div>
         <div className="w-full md:w-1/3 flex justify-center opacity-10">
            <span className="material-symbols-outlined text-[8rem] sm:text-[12rem] text-primary">shipped</span>
         </div>
      </div>
    </div>
  );
}
