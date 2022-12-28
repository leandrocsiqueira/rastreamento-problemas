import { Injectable } from '@angular/core';
import { Problema } from '../../interfaces/problema';
import { ProblemasFicticios } from '../../../assets/problemas-ficticios';

@Injectable({
  providedIn: 'root',
})
export class ProblemasService {
  private listaProblemas: Problema[] = ProblemasFicticios;

  constructor() {}

  public buscarProblemasPendentes(): Problema[] {
    return this.listaProblemas.filter((p) => !p.dataCorrecaoProblema);
  }

  public inserirProblema(novoProblema: Problema): void {
    novoProblema.idProblema = this.listaProblemas.length + 1;
    this.listaProblemas.push(novoProblema);
  }

  public FinalizarProblema(problema: Problema): void {
    const problemaSelecionado: Problema = {
      ...problema,
      dataCorrecaoProblema: new Date(),
    };
    const indice = this.listaProblemas.findIndex((p) => p === problema);
    this.listaProblemas[indice] = problemaSelecionado;
  }

  public buscarSugestoes(pesquisa: string): Problema[] {
    if (pesquisa.length > 3) {
      return this.listaProblemas.filter(
        (problema) => problema.tituloProblema.indexOf(pesquisa) !== -1
      );
    }
    return [];
  }
}
