import { Component } from '@angular/core';
import { HistoricoProvider } from '../../provider/historico';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { DetalheHistoricoPage } from './detalhe/detalhe-historico';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {

  consumos: any;
  mes: Array<string> = [];

  constructor(
    private historico: HistoricoProvider,
    private navCtr: NavController) {

    this.mes.push("");
    this.mes.push("JAN");
    this.mes.push("FEV");
    this.mes.push("MAR");
    this.mes.push("ABR");
    this.mes.push("MAI");
    this.mes.push("JUN");
    this.mes.push("JUL");
    this.mes.push("AGO");
    this.mes.push("SET");
    this.mes.push("OUT");
    this.mes.push("NOV");
    this.mes.push("DEZ");

    this.historico.getHistorico()
      .subscribe(
      (data) => {       
        this.consumos = this.getDto(data);        
      },
      (error) => {

        throw new Error(error);

      }
    )

    console.log(this.mes[1]);
  }

  getDto(arg0: any): any {    
    var arr: Array<any> = [];
    var mes: Array<string> = [];
    mes.push("");
    mes.push("JAN");
    mes.push("FEV");
    mes.push("MAR");
    mes.push("ABR");
    mes.push("MAI");
    mes.push("JUN");
    mes.push("JUL");
    mes.push("AGO");
    mes.push("SET");
    mes.push("OUT");
    mes.push("NOV");
    mes.push("DEZ");

    arg0.forEach(function (item) {
      var date = new Date(item.created);         
      arr.push({
        consumo_dia: date.getDay(),
        consumo_mes: mes[date.getMonth()],
        estabelecimento_nome: item.estabelecimento_nome,
        total_consumo: item.valorTotal,
        checkin_id: item.checkin_id
      });
    });
    
    return arr;
  }

  detalhe(item) {
    console.log(item);
    this.navCtr.push(DetalheHistoricoPage, { item: item.checkin_id });    
  }

}
