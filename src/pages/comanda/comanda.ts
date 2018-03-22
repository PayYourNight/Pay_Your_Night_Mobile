import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-comanda',
  templateUrl: 'comanda.html'
})
export class TabComandaContentPage {
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

@Component({
  selector: 'page-busca-produtos',
  templateUrl: 'buscaprodutos.html'
})
export class TabBuscaProdutosContentPage {
  produtos: Array<{ id: string, descricao: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.produtos = [];
    this.produtos.push({
        id: 'c82acfba-b4cb-4f73-bb15-9157d02688ba',
        descricao: 'teste 01'
      });

    this.produtos.push({
      id: 'e7c32b54-1553-4f79-8d6c-0e098ea4445a',
      descricao: 'teste 02'
    });

    this.produtos.push({
      id: '27f97c79-2b81-49a8-ada7-6daea54c502d',
      descricao: 'teste 03'
    });

    this.produtos.push({
      id: 'c278289c-c123-40f9-9c9f-6fa0bcc8d2c6',
      descricao: 'teste 04'
    });

    this.produtos.push({
      id: '7e649bfb-87d4-491a-857e-ed87942710de',
      descricao: 'teste 05'
    });

    this.produtos.push({
      id: 'd578ce33-2e64-4c74-a7ce-f23e47b1f02b',
      descricao: 'teste 06'
    });

    this.produtos.push({
      id: 'da5fdd02-98aa-454d-b30f-76ce986fa28d',
      descricao: 'teste 07'
    });

  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.produtos = this.produtos.filter((item) => {
        return (item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

@Component({
  template: `
  <ion-tabs class="tabs-icon">
    <ion-tab tabIcon="cart" [root]="page1"></ion-tab>
    <ion-tab tabIcon="search" [root]="page2"></ion-tab>
    <ion-tab tabIcon="barcode" [root]="page1"></ion-tab>
  </ion-tabs>
`})
export class ComandaPage {
  page1 = TabComandaContentPage;
  page2 = TabBuscaProdutosContentPage;
  //page3 = 

  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}