// LIBRARIES
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

// COMPONENTS
import Welcome from "@/components/createProduct/Welcome";
import Header from "@/components/createProduct/Header";
import Main from "@/components/createProduct/Main";
import Footer from "@/components/createProduct/Footer";

export default async function CreateProduct() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/createproduct");
  }
  return (
    <>
      <Welcome />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
