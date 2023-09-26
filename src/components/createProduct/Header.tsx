import Image from "next/image";
import tailwindImage from "@/images/Tailwind.svg";

export default function Header() {
  return (
    <header className="container mx-auto px-5 py-6 text-center">
      <Image src={tailwindImage} width={150} height={0} alt="Tailwind" className="mx-auto mb-5 mt-1 h-auto" />
      <h1 className="text-3xl font-bold text-tailwindBlue">Create Product</h1>
      <p>
        Below is an example form built entirely with Tailwind&apos;s form controls. Each required form group has a validation state that can be
        triggered by attempting to submit the form without completing it.
      </p>
      <div className="mt-5 flex items-center justify-center text-xs">
        <button type="button" className={`text-tailwindBlue`}>
          EN
        </button>
        <p>/</p>
        <button type="button" className={`text-black`}>
          ID
        </button>
      </div>
    </header>
  );
}
