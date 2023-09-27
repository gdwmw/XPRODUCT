"use client";
import Image from "next/image";
import tailwindImage from "@/images/Tailwind.svg";
import { locale } from "@/locales/createProduct/language";
import { useDispatch, useSelector } from "react-redux";
import { setLangCode } from "@/redux/features/langCodeSlice";

export default function Header() {
  const lang = locale;
  const code: number = useSelector((state: any) => state.lang.code);
  const dispatch: any = useDispatch();
  return (
    <header className="container mx-auto px-5 py-6 text-center">
      <Image src={tailwindImage} width={150} height={0} alt="Tailwind" className="mx-auto mb-5 mt-1 h-auto" />
      <h1 className="text-3xl font-bold text-tailwindBlue">{lang[code].header.title}</h1>
      <p>{lang[code].header.desc}</p>
      <div className="mt-5 flex items-center justify-center text-xs">
        <button type="button" onClick={() => dispatch(setLangCode(0))} className={code === 0 ? "text-tailwindBlue" : "text-black"}>
          EN
        </button>
        <p>/</p>
        <button type="button" onClick={() => dispatch(setLangCode(1))} className={code === 1 ? "text-tailwindBlue" : "text-black"}>
          ID
        </button>
      </div>
    </header>
  );
}
