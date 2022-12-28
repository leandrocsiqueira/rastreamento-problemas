import { Component, OnInit } from '@angular/core';
import { Problema } from '../../interfaces/problema';
import { ProblemasService } from '../../services/problemas/problemas.service';

@Component({
  selector: 'app-lista-problemas',
  templateUrl: './lista-problemas.component.html',
  styleUrls: ['./lista-problemas.component.css'],
})
export class ListaProblemasComponent implements OnInit {
  protected listaProblemasPendentes: Problema[] = [];
  protected exibirRelatorioProblemas: boolean = false;
  protected problemaSelecionado: Problema | null = null;

  constructor(private readonly servicoProblemas: ProblemasService) {}

  ngOnInit(): void {
    this.exibirProblemasPendentes();
  }

  private exibirProblemasPendentes(): void {
    this.listaProblemasPendentes =
      this.servicoProblemas.buscarProblemasPendentes();
  }

  protected quandoFecharFormulario(): void {
    this.exibirRelatorioProblemas = false;
    this.exibirProblemasPendentes();
  }

  public aoConfirmar(confirma: boolean): void {
    if (confirma && this.problemaSelecionado) {
      this.servicoProblemas.FinalizarProblema(this.problemaSelecionado);
      this.exibirProblemasPendentes();
    }
    this.problemaSelecionado = null;
  }
}
