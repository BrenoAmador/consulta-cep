import axios from "axios";

const api = async (cep) =>
  await axios.get("http://viacep.com.br/ws/" + cep + "/json/");
export default api;
