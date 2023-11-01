import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "XProduct | Create Product",
  description: "© 2023 Gede Dewo Wahyu M.W. All rights reserved.",
};

export default function CreateProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
