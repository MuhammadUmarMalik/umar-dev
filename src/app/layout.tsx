import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umar - Full Stack Developer",
  description: "Portfolio website of Umar - Full Stack Web Developer, Mobile App Developer, and Creative Designer building exceptional digital experiences",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 text-white min-h-screen overflow-x-hidden`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
