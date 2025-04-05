import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { AnimatePresence } from 'framer-motion'; // For page transitions later

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alex's Data Science Portfolio", // Update with your name/title
  description: "Showcasing projects in Data Science, MLOps, and Environmental Impact.", // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {/* <AnimatePresence mode="wait" initial={false}> */}
          {children}
          {/* </AnimatePresence> */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
