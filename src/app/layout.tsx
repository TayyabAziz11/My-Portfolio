import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
        {children}
        </body>
    </html>
  );
}
