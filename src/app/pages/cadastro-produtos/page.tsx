import React from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import AdmHeader from "@/app/components/header-adm/page";

export default function CadastroProdutos() {
  return (
    <>
      <AdmHeader></AdmHeader>
      <body>
        <div className="tituloCp">
          <span className="textoTiluloCp">Dados do Produto</span>
          <div className="linhaTituloCp"></div>
        </div>

        <div className="groupInputCp">
          <div className="labelCp">
            <label>Nome do Produto</label>
            <input type="text" name="" id="inputCp" />
          </div>

          <div className="labelCp">
            <label>SKU</label>
            <input type="text" name="" id="inputCpSKU" />
          </div>
        </div>
        <div className="groupInputCp"></div>
      </body>
    </>
  );
}
