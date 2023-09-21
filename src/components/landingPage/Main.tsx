"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import tailwindImages from "@/images/Tailwind.svg";

export default function Main() {
  const router = useRouter();
  return (
    <main>
      <section id="Home" className="bg-gradient-to-b from-tailwindGreen to-white pb-56 pt-40 md:pt-48 ">
        <div className="container mx-auto px-10 md:grid md:grid-cols-2">
          <div className="my-auto space-y-10">
            <div className="space-y-4 text-white">
              <h1 className="text-5xl font-bold">Better Solution For Your Business</h1>
              <p>We are a team of talented designers making websites with Tailwind</p>
            </div>
            <div className="space-x-10">
              <button
                type="button"
                onClick={() => {
                  router.push("/login");
                }}
                className="rounded-full bg-tailwindBlue px-6 py-3 font-bold text-white hover:bg-tailwindBlueSecondary">
                Get Started
              </button>
              <a
                href="https://www.youtube.com/watch?v=4OQmtrYtkPg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tailwindBlue">
                Watch Video
              </a>
            </div>
          </div>
          <Image
            src={tailwindImages}
            alt="image"
            className="my-auto ml-auto hidden h-auto drop-shadow-xl md:block md:w-[300px] lg:w-[350px] xl:w-[450px]"
          />
        </div>
      </section>

      <section id="Newsletter" className="bg-white py-36">
        <div className="container mx-auto space-y-10 px-10 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-tailwindBlue">Join Our Newsletter</h2>
            <p className="text-gray-600">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
          <form action="#" method="post" className="flex flex-col items-center justify-center gap-y-3 sm:flex-row sm:gap-x-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-full border-2 border-gray-300 px-4 py-2.5 outline-none focus:border-tailwindBlue sm:w-[700px]"
            />
            <button type="button" className="inline-block rounded-full bg-tailwindBlue px-6 py-3 font-bold text-white hover:bg-tailwindBlueSecondary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
