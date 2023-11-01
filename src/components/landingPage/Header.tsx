"use client";

//IMPORT LIBRARIES
import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

// IMPORT COMPONENTS
import { locale } from "@/locales/landingPage/language";

export default function Header() {
  // USE SESSION
  const session = useSession();

  // REDUX LANGUAGE
  const lang = locale;
  const code: number = useSelector((state: any) => state.lang.code);

  // MOBILE MENU STATE
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // MOBILE MENU REF
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-tailwindGreen px-10 py-4">
      <nav className="flex items-center justify-between font-bold text-white">
        {/* TITLE */}
        <h1 className="text-3xl font-semibold">XProduct</h1>
        {/* DEKSTOP */}
        <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-1">
          <a href="#Home" className="rounded-md px-3 py-2 hover:bg-white hover:text-tailwindGreen">
            {lang[code].header.button.b1}
          </a>
          <a href="#Newsletter" className="rounded-md px-3 py-2 hover:bg-white hover:text-tailwindGreen">
            {lang[code].header.button.b2}
          </a>
          <a href="#Contact" className="rounded-md px-3 py-2 hover:bg-white hover:text-tailwindGreen">
            {lang[code].header.button.b3}
          </a>
          {session.status === "unauthenticated" ? (
            <Link href={"/login"} className="rounded-md bg-white px-3 py-2 text-tailwindGreen hover:bg-gray-200">
              {lang[code].header.button.b4}
            </Link>
          ) : (
            session.data?.user?.image && (
              <Image src={session.data?.user?.image} alt="Profile" width={38} height={38} loading="eager" className="ml-1" />
            )
          )}
        </div>

        {/* MOBILE */}
        <div onClick={() => setIsOpen(true)} className="block text-white hover:text-tailwindBlue sm:hidden">
          <FiMenu size={40} />
        </div>
        {isOpen && (
          <div className="fixed left-0 top-0 h-96 w-full bg-tailwindBlue/80 sm:hidden">
            <div className="flex h-full w-full items-center justify-center">
              <div ref={menuRef} className="space-x-1">
                <a href="#Home" className="inline-block rounded-md px-3 py-2 focus:bg-white focus:text-tailwindBlue/80">
                  {lang[code].header.button.b1}
                </a>
                <a href="#Newsletter" className="inline-block rounded-md px-3 py-2 focus:bg-white focus:text-tailwindBlue/80">
                  {lang[code].header.button.b2}
                </a>
                <a href="#Contact" className="inline-block rounded-md px-3 py-2 focus:bg-white focus:text-tailwindBlue/80">
                  {lang[code].header.button.b3}
                </a>
                {session.status === "unauthenticated" && (
                  <Link href={"/login"} className="inline-block rounded-md bg-white px-3 py-2 text-tailwindBlue/80 hover:bg-gray-200">
                    {lang[code].header.button.b4}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
