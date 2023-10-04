"use client";

// IMPORT LIBRARIES
import { useState, useEffect } from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// IMPORT COMPONENTS
import { locale } from "@/locales/login/language";
import InputText from "@/components/login/inputs/InputText";
import InputPassword from "@/components/login/inputs/InputPassword";
import Warning from "@/components/login/inputs/Warning";
import imgXPRODUCT from "@/images/XPRODUCT.png";
import loadingAnimation from "@/images/Loading.svg";

export default function Login() {
  // USE SESSION
  const session = useSession();

  // USE ROUTER
  const router = useRouter();

  // USERNAME & PASSWORD STATE
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // WARNING STATE
  const [warning, setWarning] = useState<boolean>(false);

  // LOADING STATE
  const [loading, setLoading] = useState<boolean>(false);

  // REDUX LANGUAGE
  const lang = locale;
  const code: number = useSelector((state: any) => state.lang.code);

  // HANDLE SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res: any = await signIn(`credentials`, {
        username,
        password,
        redirect: false,
      });

      if (res.error) {
        setWarning(true);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // CHECK STATUS & REDIRECT
  useEffect(() => {
    if (session.status === "authenticated") {
      setLoading(true);
      setTimeout(() => {
        router.push("/createproduct");
      }, 1000);
    }
  }, [session, router]);

  return (
    <div className="bg-white sm:bg-gray-100">
      <div className="container mx-auto flex h-screen w-screen items-center justify-center">
        <div className="w-[450px] rounded-xl bg-white p-4 sm:shadow-md">
          <header className="flex flex-col items-center justify-center gap-5 pb-5 sm:pt-4">
            <Image src={imgXPRODUCT} width={150} height={0} alt="Tailwind" />
            <h2 className="text-center text-2xl font-bold text-tailwindBlue">{lang[code].header.title}</h2>
          </header>

          <main>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* USERNAME */}
              <InputText
                label={lang[code].main.input.i1}
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onClick={() => {}}
                classBoolean={warning}
              />

              {/* PASSWORD */}
              <InputPassword
                label={lang[code].main.input.i2}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onClick={() => {}}
                classBoolean={warning}
              />

              {/* WARNING */}
              <div className="text-center">
                <Warning label={lang[code].main.warning} displayBoolean={warning} />
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className={`w-full rounded-md ${loading ? "cursor-wait bg-tailwindGreenSecondary/50" : "bg-tailwindGreen"} px-4 py-2 text-white ${
                  loading ? "" : "hover:bg-tailwindGreenSecondary"
                } focus:outline-none`}
                disabled={loading}
              >
                <div className="flex items-center justify-center gap-1">
                  Login
                  {loading && <Image src={loadingAnimation} alt="Loading" width={20} height={0} loading="eager" />}
                </div>
              </button>
            </form>
          </main>

          <footer className="mt-6 pb-4 pt-1 text-center text-gray-500">
            <p>{lang[code].footer.copyright}</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
