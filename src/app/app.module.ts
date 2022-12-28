import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ListaProblemasComponent } from './components/lista-problemas/lista-problemas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RelatorioProblemasComponent } from './components/relatorio-problemas/relatorio-problemas.component';
import { DialogoConfirmacaoComponent } from './components/dialogo-confirmacao/dialogo-confirmacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProblemasComponent,
    RelatorioProblemasComponent,
    DialogoConfirmacaoComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
