"use client";

//IMPORT LIBRARIES
import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  // USE SESSION
  const session = useSession();

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
    <header className="flex items-center justify-between bg-tailwindGreen px-10 py-4 text-white">
      {/* TITLE */}
      <h1 className="text-3xl font-semibold">XProduct</h1>
      <nav className="font-bold text-white">
        {/* DEKSTOP */}
        <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-1">
          <a href="#Home" className="rounded-md px-3 py-2 hover:bg-white hover:text-tailwindGreen">
            Home
          </a>
          <a href="#Newsletter" className="rounded-md px-3 py-2 hover:bg-white hover:text-tailwindGreen">
            Newsletter
          </a>
          <a href="#Contact" className="rounded-md px-3 py-2 hover:bg-white hover:text-tailwindGreen">
            Contact
          </a>
          {session.status === "unauthenticated" ? (
            <Link href={"/login"}>
              <button type="button" className="rounded-md bg-white px-3 py-2 text-tailwindGreen hover:bg-gray-200">
                Login
              </button>
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
              <div ref={menuRef} className="flex items-center justify-center gap-1">
                <a href="#Home" className="rounded-md px-3 py-2 focus:bg-white focus:text-tailwindBlue/80">
                  Home
                </a>
                <a href="#Newsletter" className="rounded-md px-3 py-2 focus:bg-white focus:text-tailwindBlue/80">
                  Newsletter
                </a>
                <a href="#Contact" className="rounded-md px-3 py-2 focus:bg-white focus:text-tailwindBlue/80">
                  Contact
                </a>
                {session.status === "unauthenticated" && (
                  <Link href={"/login"}>
                    <button type="button" className="rounded-md bg-white px-3 py-2 text-tailwindBlue/80 hover:bg-gray-200">
                      Login
                    </button>
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
