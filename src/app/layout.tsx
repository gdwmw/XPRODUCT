import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Product",
  description: "Gede Dewo Wahyu M.W",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${outfit.className}`}>{children}</body>
    </html>
  );
}
