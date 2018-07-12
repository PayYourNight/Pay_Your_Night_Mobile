import { Component } from '@angular/core';
import { PontuacaoProvider } from '../../provider/pontuacao';

@Component({
  selector: 'page-pontuacao',
  templateUrl: 'pontuacao.html'
})
export class PontuacaoPage {
  total: any;

  saldos: any;

  constructor(private pontuacao: PontuacaoProvider) {

    this.pontuacao.buscar()
      .subscribe(
      (data) => {
        if (data) {
          console.log(data);
          this.total = this.getTotal(data);
          this.saldos = data;
        }
      },
      (error) => {
        throw new Error(error);
      }
    );

  }

  getTotal(arg0: any): any {
    var total = 0;

    arg0.forEach(function (item) {
      total += item.valorMovimentado;
    });

    return total;

  }

}
