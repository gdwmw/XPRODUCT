"use client";

// IMPORT LIBRARIES
import { useSelector } from "react-redux";

// IMPORT COMPONENTS
import { locale } from "@/locales/createProduct/language";

export default function Footer() {
  // REDUX LANGUAGE
  const lang = locale;
  const code: number = useSelector((state: any) => state.lang.code);
  return (
    <footer className="py-4 text-center">
      <p>{lang[code].footer.copyright}</p>
    </footer>
  );
}
