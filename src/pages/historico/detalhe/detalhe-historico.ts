import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { HistoricoProvider } from '../../../provider/historico';

@Component({
  selector: 'page-detalhe-historico',
  templateUrl: 'detalhe-historico.html'
})
export class DetalheHistoricoPage {

  private consumos: any;

  constructor(private param: NavParams, private historico: HistoricoProvider) {
    var item = param.get("item");

    this.historico.getDetalhe(item).subscribe(
      (data) => {
        this.consumos = data;
    })

  }

}
