import { AdminNav } from "@/components/admin-panel/nav";
import { PageTransition } from "@/components/shared/page-transition";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background min-h-screen">
      <AdminNav />
      <main className="flex-1 lg:ml-72 pt-20 sm:pt-24 lg:pt-12 px-4 sm:px-6 lg:px-12 pb-12 overflow-x-hidden h-screen overflow-y-auto custom-scrollbar">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  );
}
