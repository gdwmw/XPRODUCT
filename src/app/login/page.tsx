"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import tailwindImage from "@/images/Tailwind.svg";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [incorrectData, setIncorrectData] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.email === "admin@gmail.com" && formData.password === "admin") {
      localStorage.setItem("isLogin", "true");
      router.push("/createproduct");
    } else {
      setIncorrectData("Incorrect email or password");
    }
  };

  const inputFieldStyle = {
    base: "w-full rounded border-2 border-gray-200 px-4 py-2 outline-none focus:border-tailwindBlue",
    error: "w-full rounded border-2 border-red-300 px-4 py-2 outline-none focus:border-tailwindBlue",
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-4 shadow-md">
        <header>
          <Image src={tailwindImage} width={150} height={0} alt="Tailwind" className="mx-auto mb-5 mt-4 h-auto" />
          <h2 className="mb-4 text-center text-2xl font-bold text-tailwindBlue">Login to your Account</h2>
        </header>

        <main>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={incorrectData === "Incorrect email or password" ? inputFieldStyle.error : inputFieldStyle.base}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600">
                Password :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={incorrectData === "Incorrect email or password" ? inputFieldStyle.error : inputFieldStyle.base}
                required
              />
            </div>
            <p className="py-5 text-center text-red-400">{incorrectData}</p>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full rounded-md bg-tailwindGreen px-4 py-2 text-white hover:bg-tailwindGreenSecondary focus:outline-none">
                Login
              </button>
            </div>
          </form>
        </main>

        <footer className="pb-4 pt-1 text-center text-gray-500">
          <p>© 2023 Gede Dewo Wahyu M.W. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
