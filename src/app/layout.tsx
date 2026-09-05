import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({subsets:["latin"]})

export const metadata: Metadata = {
  title: "AI Trip Planner",
  description: "Plan your next trip with AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
    <html
      lang="en"
      className={outfit.className}
    >
      <body className="min-h-full flex flex-col">
          <ConvexClientProvider>
            <main className="flex-1 flex flex-col">{children}</main>
          </ConvexClientProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
