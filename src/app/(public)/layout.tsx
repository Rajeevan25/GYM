import { PublicHeader } from "@/components/public-site/header";
import { PublicFooter } from "@/components/public-site/footer";
import { PageTransition } from "@/components/shared/page-transition";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicHeader />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <PublicFooter />
    </>
  );
}
