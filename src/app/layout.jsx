import { Outfit } from "next/font/google";
import "@/styles/tailwind.css";
const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <title>Create Product</title>
      </head>
      <body className={`bg-gray-100 ${outfit.className}`}>{children}</body>
    </html>
  );
}
