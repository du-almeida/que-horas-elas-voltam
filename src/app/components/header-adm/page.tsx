import React from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";

export default function AdmHeader() {
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
          />
        </div>
        <div className="btnHeader">
          <button className="btnHeaderItem">Pedido</button>
          <button className="btnHeaderItem">Produto</button>
          <button className="btnHeaderItem">Financeiro</button>
          <button className="btnHeaderItem">Clientes</button>
        </div>
        <div className="btnUser">
          <button>DA</button>
        </div>
      </nav>
    </>
  );
}      
