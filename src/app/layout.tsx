import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { Toaster } from "sonner";
import "material-symbols/outlined.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JK GYM | The Kinetic Architect",
  description: "High-performance fitness infrastructure in Jaffna, Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="antialiased font-body bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen">
        <CartProvider>
          <Toaster 
            position="top-center" 
            theme="dark" 
            richColors 
            closeButton
            toastOptions={{
              className: 'font-headline uppercase tracking-widest text-[10px]',
            }}
          />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
