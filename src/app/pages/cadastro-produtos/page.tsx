import React from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import AdmHeader from "@/app/components/header/page";

export default function CadastroProdutos() {
  return (
    <>
      <AdmHeader></AdmHeader>
      <body>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="email" label="Email" />
          <Input type="email" label="Email" placeholder="Enter your email" />
        </div>
      </body>
    </>
  );
}
