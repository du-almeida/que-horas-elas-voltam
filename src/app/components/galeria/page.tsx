import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function galeriaProduto() {
  return (
    <Card className="containerCard">
      <div className="cardProd">
        <CardHeader className="headerCard">
          <h1 className="brecho">Brechó</h1>
          <span>Troca e venda de peças</span>
          <p>26/10</p>
        </CardHeader>
        <CardBody className="bodyCard">
          <Image
            alt="Card background"
            className="imgCard"
            src="https://i.pinimg.com/enabled_lo/564x/68/3c/f5/683cf5a1696311cebc2bfce3efe43f8b.jpg"
            width={270}
            height={300}
          />
          <button className="btnCardProd">SABER MAIS</button>
        </CardBody>
      </div>

      <div className="cardProd">
        <CardHeader className="headerCard">
          <h1 className="oficina">Oficina</h1>
          <span>Etamparia em Ecobag</span>
          <p>02/11</p>
        </CardHeader>
        <CardBody className="bodyCard">
          <Image
            alt="Card background"
            className="imgCard"
            src="https://i.pinimg.com/736x/69/f5/41/69f541d8c128775d035ec0ad4782a481.jpg"
            width={270}
            height={300}
          />
          <button className="btnCardProd">SABER MAIS</button>
        </CardBody>
      </div>

      <div className="cardProd">
        <CardHeader className="headerCard">
          <h1 className="oficina">Oficina</h1>
          <span>Customização Roupas</span>
          <p>09/11</p>
        </CardHeader>
        <CardBody className="bodyCard">
          <Image
            alt="Card background"
            className="imgCard"
            src="https://i.pinimg.com/564x/4b/e0/d2/4be0d2dc50c39742d3a804045e5810ac.jpg"
            width={270}
            height={300}
          />
          <button className="btnCardProd">SABER MAIS</button>
        </CardBody>
      </div>

      <div className="cardProd">
        <CardHeader className="headerCard">
          <h1 className="oficina">Oficina</h1>
          <span>Pintura em Taça</span>
          <p>16/11</p>
        </CardHeader>
        <CardBody className="bodyCard">
          <Image
            alt="Card background"
            className="imgCard"
            src="https://i.pinimg.com/736x/ae/89/af/ae89afdb972769534b14209653f74b40.jpg"
            width={270}
            height={300}
          />
          <button className="btnCardProd">SABER MAIS</button>
        </CardBody>
      </div>

      <div className="cardProd">
        <CardHeader className="headerCard">
          <h1 className="oficina">Oficina</h1>
          <span>Criação de Arranjo de Flores</span>
          <p>23/11</p>
        </CardHeader>
        <CardBody className="bodyCard">
          <Image
            alt="Card background"
            className="imgCard"
            src="https://i.pinimg.com/enabled_lo/564x/26/9a/78/269a78a84358b868cd7bd96743803f2b.jpg"
            width={270}
            height={300}
          />
          <button className="btnCardProd">SABER MAIS</button>
        </CardBody>
      </div>

      <div className="cardProd">
        <CardHeader className="headerCard">
          <h1 className="oficina">Oficina</h1>
          <span>Aula de Massa Fresca</span>
          <p>30/11</p>
        </CardHeader>
        <CardBody className="bodyCard">
          <Image
            alt="Card background"
            className="imgCard"
            src="https://i.pinimg.com/enabled_lo/564x/77/47/f1/7747f1c64d1809f30cbcc0cc9dd227ab.jpg"
            width={270}
            height={300}
          />
          <button className="btnCardProd">SABER MAIS</button>
        </CardBody>
      </div>

      <div className="cardProd">
        <CardHeader className="headerCard">
          <h1 className="elasVoltam"> elas, voltam?</h1>
          <span>Degustação de Vinho</span>
          <p>07/12</p>
        </CardHeader>
        <CardBody className="bodyCard">
          <Image
            alt="Card background"
            className="imgCard"
            src="https://i.pinimg.com/originals/94/b3/54/94b354595bc0181999395e05c4527e31.jpg"
            width={270}
            height={300}
          />
          <button className="btnCardProd">SABER MAIS</button>
        </CardBody>
      </div>

      <div className="cardProd">
        <CardHeader className="headerCard">
          <h1 className="viagem">Viagem</h1>
          <span>Rio de Janeiro</span>
          <p>18/01</p>
        </CardHeader>
        <CardBody className="bodyCard">
          <Image
            alt="Card background"
            className="imgCard"
            src="https://i.pinimg.com/originals/18/ce/b8/18ceb8f1444f395aaff5715444db53ec.jpg"
            width={270}
            height={300}
          />
          <button className="btnCardProd">SABER MAIS</button>
        </CardBody>
      </div>

      {/* Segunda fileira */}

      {/* <div className="cardProd">
      <CardHeader className="headerCard">
        <p>Aula de Massa Fresca</p>
        <span>20/11</span>
        <p>Eataly</p>
      </CardHeader>
      <CardBody className="bodyCard">
        <Image
          alt="Card background"
          className="imgCard"
          src="https://i.pinimg.com/enabled_lo/564x/77/47/f1/7747f1c64d1809f30cbcc0cc9dd227ab.jpg"
          width={270}
          height={300}
        />
        <button className="btnCardProd">SABER MAIS</button>
      </CardBody>
      </div>

      <div className="cardProd">
      <CardHeader className="headerCard">
        <p>Degustação de Vinho</p>
        <span>20/11</span>
        <p>Evino</p>
      </CardHeader>
      <CardBody className="bodyCard">
        <Image
          alt="Card background"
          className="imgCard"
          src="https://i.pinimg.com/originals/94/b3/54/94b354595bc0181999395e05c4527e31.jpg"
          width={270}
          height={300}
        />
        <button className="btnCardProd">SABER MAIS</button>
      </CardBody>
      </div>

      <div className="cardProd">
      <CardHeader className="headerCard">
        <p>Viagem Rio de Janeiro</p>
        <span>-</span>
        <p>-</p>
      </CardHeader>
      <CardBody className="bodyCard">
        <Image
          alt="Card background"
          className="imgCard"
          src="https://i.pinimg.com/originals/18/ce/b8/18ceb8f1444f395aaff5715444db53ec.jpg"
          width={270}
          height={300}
        />
        <button className="btnCardProd">SABER MAIS</button>
      </CardBody>
      </div>

      <div className="cardProd">
        <CardHeader className="headerCard">
          <p>Picnic</p>
          <span>-</span>
          <p>-</p>
        </CardHeader>
        <CardBody className="bodyCard">
          <Image
            alt="Card background"
            className="imgCard"
            src="https://i.pinimg.com/enabled_lo/564x/57/a0/1b/57a01b7440a6ac5bde67b313cad788b6.jpg"
            width={270}
            height={300}
          />
          <button className="btnCardProd">SABER MAIS</button>
        </CardBody>
      </div> */}
    </Card>
  );
}
