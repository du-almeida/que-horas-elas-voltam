"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CalendarDate, DateInput, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import { EyeSlashFilledIcon } from "../../components/bottons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../components/bottons/EyeFilledIcon";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useSession } from "next-auth/react";
import { Formik } from "formik";

export default function CadastroUsuario() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const newResisterUser = useCallback(() => {}, [])
  const [error, setError] = useState("");
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const router = useRouter();
  // const { status } = useSession();


  function parseDate(arg0: string): any {
    throw new Error("Function not implemented.");
  }

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/");
  //   }
  // }, [status, router]);

  // if (status !== "unauthenticated") {
  //   return null;
  // }

  const initialValues = {
    name: "",
    cpf: "",
    aniversario: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password: Yup.string().required("O campo senha é obrigatório"),
  });

  async function handleSubmit(values: { name: string; cpf: string; aniversario: string; email: string; password: string; }, { resetForm }: any) {
    setFormSubmitting(true);
    try {
      await fetch("src/app/API/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          cpf: values.cpf,
          aniversario: values.aniversario,
          email: values.email,
          password: values.password,
        }),
      }).then(async (res) => {
        const result = await res.json();

        if (result.status === 201) {
          alert(result.message);
          router.push("/src/app/pages/login");
        } else {
          renderError(result.message);
          resetForm();
        }
        setFormSubmitting(false);
      });
    } catch {
      setFormSubmitting(false);
      renderError("Erro ao criar conta, tente mais tarde!");
    }
  }

  function renderError(msg: React.SetStateAction<string>) {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 3000);
  }

  

  return (
    <>
      <div className="loginUser min-h-screen" onSubmit={newResisterUser}>
        <div className="divImagCadastro">
          <Image
            src="/img/QHEV-CadastroUsuario.png" // Caminho da imagem
            alt="Logo Que Horas Elas Voltam," // Descrição da imagem para acessibilidade
            width={689} // Largura da imagem em pixels
            height={1393} // Altura da imagem em pixels
            layout="responsive" // Layout da imagem (opcional: "fixed", "intrinsic", "responsive")
          />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({values}) => (
            <form>
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
                      className="inputSenha"
                      required
                    />
                  </div>

                  <div>
                    <button
                    type="submit"
                    // text={isFormSubmitting ? "Carregando..." : "Inscrever-se"}
                    disabled={isFormSubmitting}
                   className="btnEntrarLogin"/>

                    {!values.name && !values.email && !values.password && error && (
                    <span className="text-red-500 text-sm text-center">{error}</span>
                    )}
                    <span className="text-xs text-zinc-500">
                      Já possui uma conta?
                      <strong className="text-zinc-700">
                        <Link href="/login"> Entre</Link>
                      </strong>
                    </span>
                  </div>

                  
                </div>
              </div>
              </div>
          </form>
          )}
        </Formik>
      </div>
    </>
  );
}