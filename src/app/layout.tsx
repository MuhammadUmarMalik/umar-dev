import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { GoogleAnalytics } from "@/components/ui/google-analytics";
import { BackgroundGlass } from "@/components/ui/background-glass";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: {
    default: "Muhammad Umar - Full Stack Developer & Designer",
    template: "%s | Muhammad Umar"
  },
  description: "Professional Full Stack Developer & Creative Designer specializing in modern web applications, mobile development, and UI/UX design. Building exceptional digital experiences with React, Next.js, Node.js & more.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"),
  keywords: [
    "Full Stack Developer",
    "Frontend Developer", 
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "UI/UX Designer",
    "Web Developer",
    "Muhammad Umar",
    "Portfolio"
  ],
  authors: [{ name: "Muhammad Umar" }],
  creator: "Muhammad Umar",
  publisher: "Muhammad Umar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
    title: "Muhammad Umar - Full Stack Developer & Designer",
    description: "Professional Full Stack Developer & Creative Designer building exceptional digital experiences",
    siteName: "Muhammad Umar Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Umar - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Umar - Full Stack Developer & Designer",
    description: "Professional Full Stack Developer & Creative Designer building exceptional digital experiences",
    images: ["/favicon.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icons/favicon.ico', sizes: 'any' },
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/icons/favicon.ico',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen overflow-x-hidden`}
      >
        <a href="#main" className="skip-link">Skip to content</a>
        <BackgroundGlass />
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieConsent />
          <ScrollToTop />
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics />
        </div>
      </body>
    </html>
  );
}
