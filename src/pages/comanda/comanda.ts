import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-comanda',
  templateUrl: 'comanda.html'
})
export class ComandaPage {
  produtosConsumo: Array<{ produto: { id: string, descricao: string }, dataHora: string, valorAplicado: number, status: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.produtosConsumo = [];
    this.produtosConsumo.push({
      produto: {
        id: 'c82acfba-b4cb-4f73-bb15-9157d02688ba',
        descricao: 'teste 01'
      },
      dataHora: '00:30',
      valorAplicado: 12.00,
      status: 'atendido'
    });

    this.produtosConsumo.push({
      produto: {
        id: 'e7c32b54-1553-4f79-8d6c-0e098ea4445a',
        descricao: 'teste 02'
      },
      dataHora: '00:30',
      valorAplicado: 12.00,
      status: 'atendido'
    });
  }
}
