"use client";

// IMPORT LIBRARIES
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import imgXPRODUCT from "@/images/XPRODUCT.png";

// IMPORT COMPONENTS
import { locale } from "@/locales/landingPage/language";

export default function Main() {
  //USE SESSION
  const session = useSession();

  // REDUX LANGUAGE
  const lang = locale;
  const code: number = useSelector((state: any) => state.lang.code);

  // EMAIL STATE
  const [email, setEmail] = useState<string>();

  // HANDLE SUBMIT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section id="Home" className="bg-gradient-to-b from-tailwindGreen to-white pb-56 pt-40 md:pt-48 ">
        <div className="container mx-auto px-10 md:grid md:grid-cols-2">
          <div className="my-auto space-y-10 text-white">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">{lang[code].main.title}</h1>
              <p>{lang[code].main.desc}</p>
            </div>
            <div className="space-x-10">
              <Link
                href={session.status === "unauthenticated" ? "/login" : "/createproduct"}
                className="inline-block rounded-full bg-tailwindBlue px-6 py-3 font-bold hover:bg-tailwindBlueSecondary"
              >
                {session.status === "unauthenticated" ? lang[code].main.button.b1[0] : lang[code].main.button.b1[1]}
              </Link>
              <a
                href="https://academy.alterra.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full px-6 py-3 font-bold text-white hover:bg-tailwindBlue/20 hover:text-tailwindBlue min-[430px]:inline-block"
              >
                {lang[code].main.button.b2}
              </a>
            </div>
          </div>
          <Image
            src={imgXPRODUCT}
            alt="image"
            className="my-auto ml-auto hidden h-auto drop-shadow-xl md:block md:w-[300px] lg:w-[350px] xl:w-[450px]"
          />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="Newsletter" className="bg-white py-36">
        <div className="container mx-auto space-y-10 px-10 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-tailwindBlue"> {lang[code].main.news.title}</h2>
            <p className="text-gray-600">{lang[code].main.news.desc}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-y-3 sm:flex-row sm:gap-x-4">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={lang[code].main.news.placeholder}
              className="w-full rounded-full border-2 border-gray-300 px-4 py-2.5 outline-none focus:border-tailwindBlue sm:w-[700px]"
            />
            <button type="submit" className="rounded-full bg-tailwindBlue px-6 py-3 font-bold text-white hover:bg-tailwindBlueSecondary">
              {lang[code].main.button.b3}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
