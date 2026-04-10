import { AdminNav } from "@/components/admin-panel/nav";
import { AdminHeader } from "@/components/admin-panel/header";
import { PageTransition } from "@/components/shared/page-transition";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background min-h-screen">
      <AdminNav />
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        <AdminHeader />
        <main className="flex-1 lg:ml-72 pt-24 sm:pt-36 lg:pt-32 px-4 sm:px-6 lg:px-12 pb-12 overflow-x-hidden min-h-screen custom-scrollbar">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
