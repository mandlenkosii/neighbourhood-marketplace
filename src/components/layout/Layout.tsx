import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-screen max-w-7xl px-6 py-8">
        {children}
      </main>

      <Footer />
    </>
  );
}