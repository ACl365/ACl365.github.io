import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Import Montserrat
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { AnimatePresence } from 'framer-motion'; 
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Variable for body font
});

// Initialize Montserrat for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '700'], // Specify weights needed
  variable: "--font-montserrat", // Variable for heading font
});

export const metadata: Metadata = {
  title: "Alexander's Data Science Portfolio", 
  description: "Showcasing projects in Data Science, MLOps, and Environmental Impact.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body
        className={`font-sans antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex flex-col min-h-screen`} // font-sans will use the default sans defined in tailwind.config
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
