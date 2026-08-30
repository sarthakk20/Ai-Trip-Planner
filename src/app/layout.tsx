import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const outfit = Outfit({subsets:["latin"]})

export const metadata: Metadata = {
  title: "AI Trip Planner",
  description: "Plan your next trip with AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={outfit.className}
    >
      <body className="min-h-full flex flex-col">
          <Nav />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
