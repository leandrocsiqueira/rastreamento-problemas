import { Problema } from '../app/interfaces/problema';

export const ProblemasFicticios: Problema[] = [
  {
    idProblema: 1,
    tituloProblema: 'Adicionar validação de e-mail no formulário de registro',
    descricaoProblema:
      'Validar o e-mail informado no formulário de cadastro do usuário',
    prioridadeProblema: 'alta',
    tipoProblema: 'Recurso',
  },
  {
    idProblema: 2,
    tituloProblema: 'Exibir os detalhes do endereço de um cliente',
    descricaoProblema:
      'Adicione uma coluna para exibir os detalhes do endereço do cliente na lista de clientes',
    prioridadeProblema: 'baixa',
    tipoProblema: 'Recurso',
  },
  {
    idProblema: 3,
    tituloProblema: 'Exportação para CSV não está funcionando',
    descricaoProblema:
      'O processo de exportação de relatório para o formato CSV está dando erro.',
    prioridadeProblema: 'alta',
    tipoProblema: 'Erro',
  },
  {
    idProblema: 4,
    tituloProblema: 'Configurações de localidade do usuário',
    descricaoProblema:
      'Adicionar opções de configuração da localidade do usuário atual.',
    prioridadeProblema: 'baixa',
    tipoProblema: 'Recurso',
  },
  {
    idProblema: 5,
    tituloProblema: 'Adicionar novo tutorial de cliente',
    descricaoProblema:
      'Criar um tutorial sobre como adicionar um novo cliente no sistema.',
    prioridadeProblema: 'alta',
    tipoProblema: 'Documentação',
  },
];
