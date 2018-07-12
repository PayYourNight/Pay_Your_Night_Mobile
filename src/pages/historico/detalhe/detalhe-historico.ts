import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-detalhe-historico',
  templateUrl: 'detalhe-historico.html'
})
export class DetalheHistoricoPage {

  private consumos: any;

  constructor(private param: NavParams) {
    var item = param.get("item");
  }

}
