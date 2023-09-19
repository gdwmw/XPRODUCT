"use client";
import { ReactNode, useEffect, useState } from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import LanguageChangeButton from "@/components/buttons/LanguageChangeButton";

export default function App() {
  const [welcome, setWelcome] = useState<ReactNode>(
    <section className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-200/50 opacity-100 backdrop-blur-md transition-all duration-500">
      <p className="text-5xl sm:text-7xl md:text-9xl">HI, WELCOME!</p>
    </section>
  );

  useEffect(() => {
    setTimeout(() => {
      setWelcome(
        <section className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-200/50 opacity-0 backdrop-blur-md transition-all duration-500">
          <p className="text-5xl sm:text-7xl md:text-9xl">HI, WELCOME!</p>
        </section>
      );
      setTimeout(() => {
        setWelcome("");
      }, 550);
    }, 1000);
  }, []);

  const [language, setLanguage] = useState<string>("inggris");
  return (
    <>
      {welcome}
      <Header
        languageProps={language}
        languageChangeButtonProps={
          <LanguageChangeButton
            languageProps={language}
            onClickENProps={() => {
              setLanguage("inggris");
            }}
            onClickIDProps={() => {
              setLanguage("indonesia");
            }}
          />
        }
      />
      <Main languageProps={language} />
      <Footer languageProps={language} />
    </>
  );
}
