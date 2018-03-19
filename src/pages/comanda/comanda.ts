import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-comanda',
  templateUrl: 'comanda.html'
})
export class ComandaPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  consumos: Array<{id: string, checkin: {id: string},  produtosConsumo: Array<{produto:{id: string, descricao: string}, horaInclusao: string, valorAplicado: number, status: string }>}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.consumos = [];
    this.consumos.push({
      id: '019b5292-6d60-456e-82da-3debd5ecd84e', 
      checkin: {
        id:'1be72b33-be2c-4044-8a66-fd64f330bf8f'
      }, 
      produtosConsumo:[{
      produto: {
        id:'asjpaçlsdçlasçld', 
        descricao: 'teste 01' 
      },
        horaInclusao: '00:30',
        valorAplicado: 12.00,
        status: 'atendido'}
    ]});

    this.consumos.push({
      id: 'asdasdasdas',
      checkin: {
        id: 'slkdalksdlajsdla'
      },
      produtosConsumo: [{
        produto: {
          id: 'asjpaçlsdçlasçld',
          descricao: 'teste 01'
        },
        horaInclusao: '00:30',
        valorAplicado: 12.00,
        status: 'atendido'
      }]
    });
  }

//   itemTapped(event, item) {
//     // That's right, we're pushing to ourselves!
//     this.navCtrl.push(ListPage, {
//       item: item
//     });
//   }
}
