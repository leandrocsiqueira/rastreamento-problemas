import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialogo-confirmacao',
  templateUrl: './dialogo-confirmacao.component.html',
  styleUrls: ['./dialogo-confirmacao.component.css'],
})
export class DialogoConfirmacaoComponent implements OnInit {
  @Input() idProblema: number | null = null;
  @Output() confirma = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  protected aoConfirmar(): void {
    this.confirma.emit(true);
  }

  protected aoCancelar(): void {
    this.confirma.emit(false);
    this.idProblema = null;
  }
}
