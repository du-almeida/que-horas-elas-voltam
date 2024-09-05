"use client";
import React from "react";
import { CalendarDate, DateInput, Input } from "@nextui-org/react";
import Image from "next/image";
import { EyeSlashFilledIcon } from "../../components/bottons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../components/bottons/EyeFilledIcon";


export default function CadastroUsuario() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const imageStyle = {
    borderRadius: "15",
  };

  function parseDate(arg0: string): any {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="loginUser">
        <div className="divImagCadastro">
          <Image
            src="/img/QHEV-CADASTRO.png" // Caminho da imagem
            alt="Logo Que Horas Elas Voltam," // Descrição da imagem para acessibilidade
            width={689} // Largura da imagem em pixels
            height={530} // Altura da imagem em pixels
            layout="responsive" // Layout da imagem (opcional: "fixed", "intrinsic", "responsive")
          />
        </div>

        <div className="formCadastro">
          <div className="btnClose">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#91C483"
                // className="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
            </button>
          </div>
          <div className="groupInputCadastro">
            <div className="tituloCadastro">
              <h1 className="textoTiluloCadastro">
                Me conta mais, sobre você{" "}
              </h1>
              <div className="linhaTituloCadastro"></div>
            </div>

            <div className="inputCadastro">
              <div className="labelCadastroUsuario">
                <label>Nome Completo</label>
                <input
                  type="text  layout:responsive"
                  name=""
                  id="inputCadastro"
                  required
                />
              </div>

              <div className="cpfAniver">
                <div className="labelCadastroUsuario">
                  <label>CPF</label>
                  <input
                    type="number  layout:responsive"
                    name=""
                    id="inputCadastroCPF"
                    required
                  />
                </div>
                <div className="labelCadastroUsuario">
                  <label>Aniversário</label>
                  <DateInput
                    // placeholderValue={ new CalendarDate(1995, 11, 6)}
                    id="inputCadastroAniver"
                    className="aniversario"
                  />
                </div>
              </div>

              <div className="labelCadastroUsuario">
                <label>E-mail</label>
                <input
                  type="email  layout:responsive"
                  name=""
                  id="inputCadastro"
                  required
                />
              </div>

              <div className="labelCadastroUsuario">
                <label>Senha</label>
                <Input
                  id="inputCadastro"
                  variant="bordered"
                  placeholder="password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="max-w-xs"
                  required
                />
              </div>

              <div>
                <button className="btnEntrarLogin">Cadastrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
