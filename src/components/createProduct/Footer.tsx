"use client";
import { locale } from "@/locales/createProduct/language";
import { useSelector } from "react-redux";

export default function Footer() {
  const lang = locale;
  const code: number = useSelector((state: any) => state.lang.code);
  return (
    <footer className="py-4 text-center">
      <p>{lang[code].footer.copyright}</p>
    </footer>
  );
}
