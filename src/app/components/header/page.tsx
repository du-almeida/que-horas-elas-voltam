"use client";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="menu">
        <div className="imgLogo">
          <Image
            src="/img/logo-horizontal.png" // Caminho da imagem
            alt="Logo Que Horas Elas Voltam" // Descrição da imagem para acessibilidade
            width={100} // Largura da imagem em pixels
            height={70} // Altura da imagem em pixels
            layout="responsive" // Layout da imagem (opcional: "fixed", "intrinsic", "responsive")
            style={{ width: "50%" }} // Reduzindo a imagem para 50% do tamanho
          />
        </div>

        <div className="btnHeader">
          <Link href={"/"}>
            <button className="btnHeaderItem">Inicio</button>
          </Link>
          <Link href={"/pages/agenda"}>
            <button className="btnHeaderItem">Agenda</button>
          </Link>
          <Link href={"/pages/sobre"}>
            <button className="btnHeaderItem">Sobre</button>
          </Link>
          <Link href={"/pages/ajuda"}>
            <button className="btnHeaderItem">Ajuda</button>
          </Link>
        </div>

        <button className="btnHeaderEntrar">Entrar</button>
      </nav>
    </>
  );
}
