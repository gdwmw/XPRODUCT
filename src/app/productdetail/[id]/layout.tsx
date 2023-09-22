import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Product Detail",
  description: "© 2023 Gede Dewo Wahyu M.W. All rights reserved.",
};

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
