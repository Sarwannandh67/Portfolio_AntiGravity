import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarwan Nandh | AI Engineer & Entrepreneur",
  description: "Personal portfolio of Sarwan Nandh - AI/ML Engineer, IoT Specialist, and Founder of Sarwagyna Pvt Ltd.",
  keywords: ["Sarwan Nandh", "AI Engineer", "IoT", "Portfolio", "Sarwagyna", "Machine Learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-gold/30 selection:text-gold flex flex-col",
          inter.variable
        )}
      >
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
