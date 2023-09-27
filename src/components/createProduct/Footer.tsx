import { locale } from "@/locales/createProduct/language";

export default function Footer() {
  const lang = locale;
  const code = 1;
  return (
    <footer className="py-4 text-center">
      <p>{lang[code].footer.copyright}</p>
    </footer>
  );
}
