import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "XProduct | Login",
  description: "© 2023 Gede Dewo Wahyu M.W. All rights reserved.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
