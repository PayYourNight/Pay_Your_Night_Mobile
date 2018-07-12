import { Component } from '@angular/core';
import { HistoricoProvider } from '../../provider/historico';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { DetalheHistoricoPage } from './detalhe/detalhe-historico';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {

  private consumos: any;

  constructor(
    private historico: HistoricoProvider, private navCtr: NavController) {

    this.historico.getHistorico()
      .subscribe(
      (data) => {

        this.consumos = this.getDto(data);

      },
      (error) => {

        throw new Error(error);

      }
    )

  }

  getDto(arg0: any): any {
    var arr: Array<any> = [];    
    arg0.forEach(function (item) {
      var date = new Date(item.created);
      console.log(date);
      arr.push({
        consumo_dia: date.getDay(),
        consumo_mes: date.getMonth,
        estabelecimento_nome: item.estabelecimento_nome,
        total_consumo: item.valorTotal
      });
    });
  }

  detalhe(item) {
    this.navCtr.push(DetalheHistoricoPage, { item: item });
  }

}
