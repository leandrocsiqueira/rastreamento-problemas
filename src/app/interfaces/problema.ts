export interface Problema {
  idProblema: number;
  tituloProblema: string;
  descricaoProblema: string;
  prioridadeProblema: 'baixa' | 'alta';
  tipoProblema: 'Recurso' | 'Erro' | 'Documentação';
  dataCorrecaoProblema?: Date;
}
