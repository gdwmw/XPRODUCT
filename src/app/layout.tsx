import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "© 2023 Gede Dewo Wahyu M.W. All rights reserved.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
