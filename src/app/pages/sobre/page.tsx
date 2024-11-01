import Header from "@/app/components/header/page";
import { radio } from "@nextui-org/react";
import Image from "next/image";

export default function Sobre() {
  return (
    <main className="home">
      <Header></Header>

      <div className="sobre">
        <div className="imgSobre">
          <Image
            src="/img/imagem7.jpeg"
            alt="Duas mulheres fazendo picnic e tomando vinho"
            width={100}
            height={300}
            layout="responsive"
            style={{ borderRadius: "8px" }}
          ></Image>
        </div>
        <div className="textoSobre">
          <h1>Sobre a QHEV</h1>
          <br />
          <br />
          <p>
            Bem-vindas à QHEV – Que Horas Elas Voltam! Somos uma startup
            dedicada a criar um espaço seguro e acolhedor para mulheres que
            buscam desconectar da rotina agitada e se conectar com outras
            mulheres incríveis.
            <br />
            <br />
            Aqui, acreditamos que cada mulher merece momentos de autocuidado e a
            oportunidade de explorar novas paixões. Nossa missão é oferecer
            eventos e atividades diversificadas que promovam o bem-estar, a
            criatividade e o fortalecimento de laços.
            <br />
            <br />
            Na QHEV, você encontrará uma comunidade vibrante, onde pode
            compartilhar experiências, fazer amizades e experimentar hobbies que
            talvez nunca tenha imaginado. Seja uma aula de dança, uma oficina de
            artesanato ou um encontro para discutir livros, estamos sempre
            buscando novas maneiras de proporcionar momentos especiais e
            memoráveis.
            <br />
            <br />
            Junte-se a nós nessa jornada de descobertas e celebrações! Aqui, o
            importante é se sentir à vontade, ser você mesma e aproveitar cada
            instante. Afinal, cada atividade é uma nova oportunidade de se
            redescobrir e se conectar com outras mulheres que compartilham suas
            paixões.
            <br />
            <br />
          </p>
          <p>
            Venha fazer parte da nossa comunidade! As melhores experiências
            estão esperando por você.
          </p>
        </div>
      </div>
    </main>
  );
}
