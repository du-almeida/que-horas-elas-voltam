import React from "react";
import Image from "next/image";


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
            style={{ width: '50%' }} // Reduzindo a imagem para 50% do tamanho
          />
        </div>

        <div className="btnHeader">
          <button className="btnHeaderItem">Inicio</button>
          <button className="btnHeaderItem">Agenda</button>
          <button className="btnHeaderItem">Sobre</button>
          <button className="btnHeaderItem">Ajuda</button>
        </div>

      </nav>
    </>
  );
}      
