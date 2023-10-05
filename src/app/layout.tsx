import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import AuthProvider from "@/nextAuth/provider";
import ReduxProvider from "@/redux/provider";
import ReduxPersistProvider from "@/redux/persisted/provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XProduct | Landing Page",
  description: "© 2023 Gede Dewo Wahyu M.W. All rights reserved.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <AuthProvider>
          <ReduxProvider>
            <ReduxPersistProvider>{children}</ReduxPersistProvider>
          </ReduxProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
