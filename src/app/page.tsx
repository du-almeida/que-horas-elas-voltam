'use client'
import Image from "next/image";
import Header from "./components/header/page";
import Carrossel from "./components/carrossel/page";
import ImageCarousel from "./components/carrossel/page";


export default function Home() {
  return (
    <main className="home">
      <Header></Header>
      <ImageCarousel></ImageCarousel>
    </main>
  );
}
