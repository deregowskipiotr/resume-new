import { ReactNode } from "react";
import {Navbar} from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {children}
        </div>
      </main>
    </div>
  );
}
