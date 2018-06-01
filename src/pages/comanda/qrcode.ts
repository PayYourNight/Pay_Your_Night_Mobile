import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
    selector: 'page-qrcode-consumo',
    templateUrl: 'qrcode.html'
  })
  export class TabQrcodeConsumoContentPage {
    qrData = null;
    createdCode = null;
    scannedCode = null;
    userId = '28383794-7ab5-41a8-8272-9fc18f8df786';
    estabelecimentoId = '28383794-7ab5-41a8-8272-9fc18f8df786';
  
    constructor(
      public navCtrl: NavController, 
      private barcodeScanner: BarcodeScanner) {

        this.createCode();

      }
  
      generateCode() : string {
        var data = new Date();
        var dataHora = data.getDate();
        return this.userId + '|' + this.estabelecimentoId + '|' + dataHora 
      }
  
      createCode() {
        this.createdCode = this.generateCode();    
      }

      criarConsumoMOCK(){
        let pedidos = window.localStorage.pedidos;

        pedidos.push({
          id: '1c4f73d7-cb23-49eb-945f-6f89f5825646',
          dataHora: '3:00 AM',
          itensPedido: [
            {
              id: 'e7c32b54-1553-4f79-8d6c-0e098ea4445y',
              quantidade: '2',
              preco: '12.00',
              unidade: 'un',
              status: 'atendido',
              produto: {
                id: 'e7c32b54-1553-4f79-8d6c-0e098ea44458',
                descricao: 'teste 04'
              }
            }
          ],
        });

        window.localStorage.pedidos = pedidos;
      }
  }