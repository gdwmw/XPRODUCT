"use client";

// IMPORT LIBRARIES
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { signOut } from "next-auth/react";

// IMPORT COMPONENTS
import { locale } from "@/locales/createProduct/language";
import imgXPRODUCT from "@/images/XPRODUCT.png";
import { setLangCode } from "@/redux/features/langCodeSlice";

export default function Header() {
  // REDUX LANGUAGE
  const lang = locale;
  const code: number = useSelector((state: any) => state.lang.code);
  const dispatch: any = useDispatch();

  // LOGOUT/SIGN-OUT
  const logout = () => signOut();
  return (
    <header className="container mx-auto px-5 py-6 text-center">
      {/* LOGO */}
      <Image src={imgXPRODUCT} width={150} height={0} alt="Tailwind" className="mx-auto mb-5 mt-1 h-auto" />

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-tailwindBlue">{lang[code].header.title}</h1>

      {/* DESCRIPTION */}
      <p>{lang[code].header.desc}</p>

      {/* NAVIGATION BAR */}
      <nav className="-mx-[3px] mt-5 flex items-center justify-between text-xs sm:mx-0 md:px-[46px] lg:px-[110px]">
        <div className="flex items-center gap-2">
          {/* LANDING PAGE */}
          <Link href={"/"} className="hover:text-tailwindBlue">
            {lang[code].header.button.b1}
          </Link>
          <p>-</p>
          {/* LOGOUT */}
          <button type="button" onClick={() => logout()} className="hover:text-tailwindBlue">
            {lang[code].header.button.b2}
          </button>
        </div>
        {/* CHANGE LANGUAGE */}
        <div className="flex items-center gap-1">
          <p>{`- [`}</p>
          {/* ENGLISH */}
          <button type="button" onClick={() => dispatch(setLangCode(0))} className={code === 0 ? "text-tailwindBlue" : "text-black"}>
            EN
          </button>
          <p>/</p>
          {/* INDONESIA */}
          <button type="button" onClick={() => dispatch(setLangCode(1))} className={code === 1 ? "text-tailwindBlue" : "text-black"}>
            ID
          </button>
          <p>{`] -`}</p>
        </div>
      </nav>
    </header>
  );
}
