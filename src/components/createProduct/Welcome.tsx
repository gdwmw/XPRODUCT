"use client";

// IMPORT LIBRARIES
import { useEffect, useState } from "react";

export default function Welcome() {
  // WELCOME STATE
  const [welcome, setWelcome] = useState<React.ReactNode>(
    <section className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-200/50 opacity-100 backdrop-blur-md transition-all duration-500">
      <p className="text-5xl sm:text-7xl md:text-9xl">HI, WELCOME!</p>
    </section>,
  );

  // WELCOME TRANSITION
  useEffect(() => {
    setTimeout(() => {
      setWelcome(
        <section className="fixed right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-200/50 opacity-0 backdrop-blur-md transition-all duration-500">
          <p className="text-5xl sm:text-7xl md:text-9xl">HI, WELCOME!</p>
        </section>,
      );
      setTimeout(() => {
        setWelcome("");
      }, 550);
    }, 1000);
  }, []);
  return <>{welcome}</>;
}
