import Header from "@/app/components/header/page";

export default function Faq() {
  return (
    <main className="home">
      <Header></Header>

      <div className="tituloFaq">
        <h1>FAQ</h1>
      </div>
      <div className="faq">
        <div className="formFaq">
          <label className="labelFaq">Nome</label>
          <input
            className="inputFaq"
            type="text"
            placeholder="Que Horas Elas Voltam"
          />
        </div>
        <div className="formFaqEmailContato">
          <div className="formFaq">
            <label className="labelFaq">E-mail</label>
            <input
              className="inputFaqEmail"
              type="email"
              placeholder="oi@quehoraselasvoltam.com"
            />
          </div>
          <div className="formFaq">
            <label className="labelFaq">Telefone</label>
            <input
              className="inputFaqNumero"
              type="number"
              placeholder="(11) 9 XXXX-XXXX"
            />
          </div>
        </div>
        <div className="formFaq">
          <label className="labelFaq">Mensagem</label>
          <input
            className="inputFaqMensagem"
            type="text"
            placeholder="Oi, pode contar pra gente so que você está pensando"
          />
        </div>

        <button className="btnFaq">Enviar</button>
      </div>
    </main>
  );
}
