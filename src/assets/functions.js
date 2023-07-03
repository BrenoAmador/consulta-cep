import api from "./request";

export function consulta(cep) {
  api(cep)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
