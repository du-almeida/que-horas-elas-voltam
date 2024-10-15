import Header from "@/app/components/header/page";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function DetProduto() {
  return (
    <div className="detalhe">
      <div className="imgDetalhe">
        <Image
          alt="Card background"
          className="imgDet"
          src="/img/produtos/brecho.jpg"
          width={400}
          height={450}
        />
      </div>

      <div className="textDetalhe">
        <h1>Brechó</h1>
        <span>
          Brechó da QHEV?, encontro exclusivo para mulheres, um espaço seguro
          para extravasar e conhecer gente nova
          <br></br>O evento contará com a presença da loja QHEV, que trará uma
          seleção incrível de peças para venda.
        </span>
        <br></br>
        <h3>
          {" "}
          <strong>Como funciona</strong>{" "}
        </h3>
        <span>
          <strong>Troca de Peças:</strong> Traga suas roupas em bom estado e
          use-as como "moedas de troca" para adquirir novas peças! <br></br>
          <strong>Compra Monetizada:</strong> Também será possível comprar
          diretamente as peças disponíveis.
          <span>
            Além das trocas e compras, teremos um brunch delicioso com comidas e
            drinks para você saborear enquanto aproveita o evento. E prepare-se
            para uma surpresa!
          </span>
          <span>
            Um workshop exclusivo será oferecido durante o dia, trazendo dicas
            incríveis de estilo e sustentabilidade.
          </span>
          <br></br>
          <span>
            <br></br>
            <strong>Data:</strong> 26/10
            <br></br>
            <strong>Horário</strong> 15h
            <br></br>
            <strong>Local</strong> São Paulo
            <br></br>
          </span>
        </span>

        <h2>VALOR: 123,45</h2>
        <div className="btnCompra">
          <button className="btnDetalhe">Comprar</button>
          <button className="btnDetalheAss">Assinatura</button>
        </div>
      </div>
    </div>
  );
}
