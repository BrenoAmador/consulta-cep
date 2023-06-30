import { useState } from 'react';

function App() {
  const [cep, setCep] = useState('');

  const handleCepChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    value = value.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona o hífen depois dos primeiros 5 dígitos

    setCep(value);
  };

  return (
    <div>
      <h1 id="textoCep">ConsultaCEP</h1>
      <h2 id="textoLegenda">Projeto para Consulta de CEP usando React</h2>
      <span id="spanCep">CEP</span>
      <div id="inputCep">
        <input
          type="text"
          name="cep"
          value={cep}
          onChange={handleCepChange}
          placeholder="Digite o CEP"
          maxLength='9'
        />
        <strong>Cidade</strong>
        <span>Teodoro Sampaio - SP</span>
      </div>
    </div>
  );
}

export default App;
