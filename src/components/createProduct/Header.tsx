import Image from "next/image";
import tailwindImage from "@/images/Tailwind.svg";
import { locale } from "@/locales/createProduct/language";

export default function Header() {
  const lang = locale;
  const code = 1;
  return (
    <header className="container mx-auto px-5 py-6 text-center">
      <Image src={tailwindImage} width={150} height={0} alt="Tailwind" className="mx-auto mb-5 mt-1 h-auto" />
      <h1 className="text-3xl font-bold text-tailwindBlue">{lang[code].header.title}</h1>
      <p>{lang[code].header.desc}</p>
      <div className="mt-5 flex items-center justify-center text-xs">
        <button type="button" className={`text-tailwindBlue`}>
          EN
        </button>
        <p>/</p>
        <button type="button" className={`text-black`}>
          ID
        </button>
      </div>
    </header>
  );
}
