import axios from "axios";

interface CepApiResponse {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}

export async function getAddressByCep(cep: string) {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  const result: CepApiResponse = await response.data;

  return result;
}
