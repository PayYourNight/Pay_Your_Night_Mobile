import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html'
})
export class PagamentoPage {

  total: any = 0;
  consumos: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.total = navParams.get("total");

    this.consumos.push({
      usuario: "Meu Consumo",
      total: this.total
    });

  }
}
