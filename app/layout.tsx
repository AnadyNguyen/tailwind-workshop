import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tailwind Workshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-auto overflow-x-hidden scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex min-h-screen flex-grow flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
