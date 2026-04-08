import { MemberNav } from "@/components/member-portal/nav";
import { PageTransition } from "@/components/shared/page-transition";

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background min-h-screen">
      <MemberNav />
      <main className="flex-1 lg:ml-72 p-4 sm:p-6 lg:p-12 pb-28 lg:pb-12 h-screen overflow-y-auto overflow-x-hidden custom-scrollbar">
        {/* Mobile Top Header */}
        <div className="lg:hidden flex justify-between items-center mb-10">
          <div className="text-2xl font-black italic text-primary font-headline tracking-tighter uppercase">KINETIC</div>
          <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-primary/20 flex items-center justify-center overflow-hidden">
             <img 
               src="/images/avatar.jpg" 
               alt="Profile" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  );
}
