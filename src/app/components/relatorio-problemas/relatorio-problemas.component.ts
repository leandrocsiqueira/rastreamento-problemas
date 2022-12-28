import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProblemasService } from 'src/app/services/problemas/problemas.service';
import { Problema } from 'src/app/interfaces/problema';

@Component({
  selector: 'app-relatorio-problemas',
  templateUrl: './relatorio-problemas.component.html',
  styleUrls: ['./relatorio-problemas.component.css'],
})
export class RelatorioProblemasComponent implements OnInit {
  protected grupoControles: FormGroup | undefined;
  @Output() fechamentoFormulario = new EventEmitter();
  protected sugestoes: Problema[] = [];

  constructor(
    private readonly construtorFormulario: FormBuilder,
    private readonly servicoProblemas: ProblemasService
  ) {}

  ngOnInit(): void {
    this.grupoControles = this.construtorFormulario.group({
      tituloProblema: ['', Validators.required],
      descricaoProblema: [''],
      prioridadeProblema: ['', Validators.required],
      tipoProblema: ['', Validators.required],
    });
    this.grupoControles.controls['tituloProblema'].valueChanges.subscribe(
      (titulo: string) => {
        this.sugestoes = this.servicoProblemas.buscarSugestoes(titulo);
      }
    );
  }

  protected registrarNovoProblema(): void {
    if (this.grupoControles && this.grupoControles.invalid) {
      this.grupoControles.markAllAsTouched();
      return;
    }
    this.servicoProblemas.inserirProblema(this.grupoControles?.value);
    this.fechamentoFormulario.emit();
  }
}
