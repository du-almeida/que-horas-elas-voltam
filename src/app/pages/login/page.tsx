"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import styles from "./styles.module.css";
import { EyeSlashFilledIcon } from "../../components/bottons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../components/bottons/EyeFilledIcon";
import PasswordInput from "@/app/components/bottons/password";

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const imageStyle = {
    borderRadius: "15",
  };

  return (
    <>
      <div className="loginUser">
        <div className="divImag">
            <div className="imgQhorasElas">
              <Image
                src="/img/QHEV-Login.png" // Caminho da imagem
                alt="Logo Que Horas," // Descrição da imagem para acessibilidade
                width={464} // Largura da imagem em pixels
                height={320} // Altura da imagem em pixels
                layout="responsive" // Layout da imagem (opcional: "fixed", "intrinsic", "responsive")
                border-radius={15}
              />
            </div>
        </div>

        <div className="formLogin">
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

          <div className="groupInputLogin">
            <div className="tituloLogin">
              <h1 className="textoTiluloLogin">Login</h1>
              <div className="linhaTituloLogin"></div>
            </div>

            <div className="inputLogin">
              <div className="labelCp">
                <label>E-mail</label>
                <input
                  type="email  layout:responsive"
                  name=""
                  id="inputLogin"
                  required
                />
              </div>

              <div className="labelCp">
                <label>Senha</label>
                <Input
                  id="inputLogin"
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
                <div>
                  <button className="btnEntrarLogin">Entrar</button>
                </div>
                <div>
                  <a href="" className="redefSenha">
                    Redefinir senha
                  </a>
                </div>
              </div>

              <div>
                <button className="btnCadastrarLogin">Entrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
