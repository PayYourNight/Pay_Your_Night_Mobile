import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { PagamentoPage } from '../pagamento/pagamento'

@Component({
    selector: 'page-consumo',
    templateUrl: 'consumo.html'
  })
  export class TabConsumoContentPage {  
    //consumos: Array<{ id: string, dataHora: string, itensPedido: Array<{ id: string, quantidade: string, preco: string, unidade: string, status: string, produto: {id: string, descricao: string } }> }>;
    params: Object;
    pushPage: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
  
      //var consumos = [];
      
      //consumos.push({
      //  id: 'c82acfba-b4cb-4f73-bb15-9157d02688ba',
      //  dataHora: '22:00 PM',
      //  valorTotal: 100,
      //  itensPedido: [
      //    {
      //      id: 'e7c32b54-1553-4f79-8d6c-0e098ea4445a',
      //      quantidade: '2',
      //      preco: '12.00',
      //      unidade: 'un',
      //      status: 'atendido',
      //      produto: {
      //        id: 'ef945d6e-ffd5-4af2-aa48-3bd15c4130c0',
      //        descricao: 'teste 01' 
      //      }
      //    },
      //    {
      //      id: 'd6f901f3-f2ab-47d2-b539-02e8dd594cff',
      //      quantidade: '2',
      //      preco: '12.00',
      //      unidade: 'un',
      //      status: 'atendido',
      //      produto: {
      //        id: 'd68a732b-bdb3-4c3b-a3ed-0ca629c55fbd',
      //        descricao: 'teste 02'
      //      }
      //    },
      //    {
      //      id: '95e166d1-d804-455e-8a1a-af30ba2c45bc',
      //      quantidade: '2',
      //      preco: '12.00',
      //      unidade: 'un',
      //      status: 'estornado',
      //      produto: {
      //        id: 'bb417be7-28a6-41f6-93f4-5c6fbb69930b',
      //        descricao: 'teste 03'
      //      }
      //    }
      //  ],      
      //});
  
      //this.pedidos.push({
      //  id: '1c4f73d7-cb23-49eb-945f-6f89f5825645',
      //  dataHora: '2:00 AM',
      //  itensPedido: [
      //    {
      //      id: 'e7c32b54-1553-4f79-8d6c-0e098ea4445a',
      //      quantidade: '2',
      //      preco: '12.00',
      //      unidade: 'un',
      //      status: 'atendido',
      //      produto: {
      //        id: 'e7c32b54-1553-4f79-8d6c-0e098ea4445a',
      //        descricao: 'teste 04'
      //      }
      //    }
      //  ],
      //});

      //window.localStorage.pedidos = this.pedidos;
    }
  
    goToProdutoDetail(produto: any){
    }
  
    doRefresh(event: any){
    }
  
    goToPagamento() {
      this.navCtrl.push(PagamentoPage);
    }
  }
