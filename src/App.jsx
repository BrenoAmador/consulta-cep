import { useState } from "react";
import api from "./assets/request";
import InputMask from "react-input-mask";

function App() {
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState("");

  const inputChange = (event) => {
    setCep(event.target.value);
  };

  function consulta(cep) {
    api(cep).then((resposta) => setResultado(resposta.data));
  }

  return (
    <div>
      <h1 id="textoCep">ConsultaCEP</h1>
      <h2 id="textoLegenda">Projeto para Consulta de CEP usando React</h2>
      <span id="spanCep">CEP</span>
      <div id="inputCep">
        <InputMask
          type="text"
          id="cep"
          mask={"99999-999"}
          placeholder="Digite o CEP"
          onChange={inputChange}
        />
        <input
          type="button"
          value="Consultar"
          id="consulta"
          onClick={() => consulta(cep)}
        />
        <strong>RESULTADO</strong>
        {resultado && (
          <div>
            {Object.keys(resultado).map((chave) => (
              <div key={chave}>
                {resultado[chave] !== "" ? <strong>{chave.toUpperCase()}: </strong> : ""} 
                {resultado[chave]}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
