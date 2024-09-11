"use client";
import * as Yup from "yup"
import Button from "@/app/components/buttons/button";
import Input from "@/app/components/inputs/input";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import React from "react";

interface FormValues {
  email: string;
  password: string;
}


export default function Login() {

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  // const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    // Aqui você pode lidar com o envio do formulário, por exemplo, enviar os dados para um servidor
    // console.log(values);
    // actions.setSubmitting(false); // Finaliza o estado de submissão
  // };


  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password: Yup.string().required("O campo senha é obrigatório"),
  });

  async function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
    console.log(values);
    // Simule uma requisição assíncrona
    await new Promise((resolve) => setTimeout(resolve, 1000));

    actions.setSubmitting(false); // Finaliza o estado de submissão
  }

  return(
    <main className="min-h-screen flex items-center justify-center">
      <Formik initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({values}) => (
          <Form noValidate className="bg-white flex flex-col gap-2 p-4 border border-zinc-100 min-w-[300px] rounded">
            <Input required name="email" type="email"></Input>
            <Input required name="password" type="password" autoComplete="off"></Input>
            <Button type="submit" text="Entrar" className="bg-violet-600 text-white rounded p-2 cursor-pointer"></Button>

            <span className="text-xs text-zinc-500">
              Não possui uma conta?
              <strong className="text-xs text-violet-600 ml-2">
                <Link rel="stylesheet" href="/pages/register">Inscreva-se</Link>
              </strong>
            </span>
          </Form>
        )} 
      </Formik>
    </main>

  ) //final return
} //final export































































































// "use client";
// import React from "react";
// import { Input } from "@nextui-org/react";
// import Image from "next/image";
// import styles from "./styles.module.css";
// import { EyeSlashFilledIcon } from "../../components/bottons/EyeSlashFilledIcon";
// import { EyeFilledIcon } from "../../components/bottons/EyeFilledIcon";
// import PasswordInput from "@/app/components/bottons/password";
// import { Form } from "formik";

// export default function Login() {
//   const [isVisible, setIsVisible] = React.useState(false);

//   const toggleVisibility = () => setIsVisible(!isVisible);

//   const imageStyle = {
//     borderRadius: "15",
//   };

//   return (
//     <>
//       <Form>
//         <div className="loginUser">
//           <div className="divImag">
//               <div className="imgQhorasElas">
//                 <Image
//                   src="/img/QHEV-Login.png" // Caminho da imagem
//                   alt="Logo Que Horas," // Descrição da imagem para acessibilidade
//                   width={464} // Largura da imagem em pixels
//                   height={320} // Altura da imagem em pixels
//                   layout="responsive" // Layout da imagem (opcional: "fixed", "intrinsic", "responsive")
//                   border-radius={15}
//                 />
//               </div>
//           </div>

//           <div className="formLogin">
//             <div className="btnClose">
//               <button>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="40"
//                   height="40"
//                   fill="#91C483"
//                   // className="bi bi-x-circle-fill"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
//                 </svg>
//               </button>
//             </div>

//             <div className="groupInputLogin">
//               <div className="tituloLogin">
//                 <h1 className="textoTiluloLogin">Login</h1>
//                 <div className="linhaTituloLogin"></div>
//               </div>

//               <div className="inputLogin">
//                 <div className="labelCp">
//                   <label>E-mail</label>
//                   <input
//                     type="email  layout:responsive"
//                     name=""
//                     id="inputLogin"
//                     required
//                   />
//                 </div>

//                 <div className="labelCp">
//                   <label>Senha</label>
//                   <Input
//                     id="inputLogin"
//                     variant="bordered"
//                     placeholder="password"
//                     endContent={
//                       <button
//                         className="focus:outline-none"
//                         type="button"
//                         onClick={toggleVisibility}
//                         aria-label="toggle password visibility"
//                       >
//                         {isVisible ? (
//                           <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
//                         ) : (
//                           <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
//                         )}
//                       </button>
//                     }
//                     type={isVisible ? "text" : "password"}
//                     className="inputSenha"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <div>
//                     <button className="btnEntrarLogin">Entrar</button>
//                   </div>
//                   <div>
//                     <a href="" className="redefSenha">
//                       Redefinir senha
//                     </a>
//                   </div>
//                 </div>

//                 <div>
//                   <button className="btnCadastrarLogin">Entrar</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Form>
//     </>
//   );
// }
