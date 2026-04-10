import { TrainerNav } from "@/components/trainer-portal/nav";
import { TrainerHeader } from "@/components/trainer-portal/header";
import { PageTransition } from "@/components/shared/page-transition";

export default function TrainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background min-h-screen">
      <TrainerNav />
      <div className="flex-1 flex flex-col min-h-screen">
        <TrainerHeader />
        <main className="flex-1 lg:ml-72 pt-32 sm:pt-36 lg:pt-32 px-4 sm:px-6 lg:px-12 pb-28 lg:pb-12 h-screen overflow-y-auto overflow-x-hidden custom-scrollbar">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
