"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const router = useRouter();
  const [visibility, setVisibility] = useState<string>("hidden");
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setVisibility("hidden");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between bg-tailwindGreen px-10 py-4 text-white">
      <h1 className="text-3xl font-semibold">Simple Header</h1>
      <nav className="font-bold text-white">
        <div className="hidden sm:block sm:space-x-1">
          <a href="#Home" className="rounded-md px-3 py-2 hover:bg-white hover:text-tailwindGreen">
            Home
          </a>
          <a href="#Newsletter" className="rounded-md px-3 py-2 hover:bg-white hover:text-tailwindGreen">
            Newsletter
          </a>
          <a href="#Contact" className="rounded-md px-3 py-2 hover:bg-white hover:text-tailwindGreen">
            Contact
          </a>
          <button type="button" onClick={() => router.push("/login")} className="rounded-md bg-white px-3 py-2 text-tailwindGreen hover:bg-gray-100">
            Login
          </button>
        </div>
        <div onClick={() => setVisibility("block")} className="block text-white hover:text-tailwindBlue sm:hidden">
          <FiMenu size={40} />
        </div>
        <div className={`${visibility} fixed left-0 top-0 h-96 w-full bg-tailwindBlue/80 sm:hidden`}>
          <div className="flex h-full w-full items-center justify-center">
            <div ref={menuRef} className="space-x-1">
              <a href="#Home" className="rounded-md px-3 py-2 focus:bg-white focus:text-tailwindBlue">
                Home
              </a>
              <a href="#Newsletter" className="rounded-md px-3 py-2 focus:bg-white focus:text-tailwindBlue">
                Newsletter
              </a>
              <a href="#Contact" className="rounded-md px-3 py-2 focus:bg-white focus:text-tailwindBlue">
                Contact
              </a>
              <button type="button" onClick={() => router.push("/login")} className="rounded-md bg-white px-3 py-2 text-tailwindBlue">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
