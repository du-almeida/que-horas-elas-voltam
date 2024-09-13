import Image from "next/image";
import Header from "./components/header/header";
import AuthProvider from "./components/AuthProvider";
import LayoutAdmin from "./components/layoutAdm";

export default function Home() {
  return (
    <LayoutAdmin>
    <main className="min-h-screen flex justify-center pt-6">Home</main>
  </LayoutAdmin>
  );
}
