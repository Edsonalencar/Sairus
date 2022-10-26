interface User {
  uuid?: string;
  username: string;
  password: string;
  code: string;
  nome_social?: string;
  data_nascimento?: string;
  idade?: number;
  sexo?: string;
  telefone?: string;
  telefone_emergencia?: string;
  cpf?: string;
  cns?: string;
  cep?: string;
  sangue?: string;
  alergia_medicamentos?: string;
  medicamentos?: string;
  gestante?: boolean;
  gestante_risco?: boolean;
  peso?: number;
  comorbidades?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  estado?: string
}

export default User;
