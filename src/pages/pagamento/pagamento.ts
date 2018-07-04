import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html'
})
export class PagamentoPage {

  total: any = 0;
  consumos: any = [];
  pagarPYNCoin: boolean;
  totalPagar: number;
  totalPontos: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.totalPagar = 0;
    this.totalPontos = 0;
    this.total = navParams.get("total");

    this.consumos.push({
      usuario: "Meu Consumo",
      total: this.total
    });

  }
}
