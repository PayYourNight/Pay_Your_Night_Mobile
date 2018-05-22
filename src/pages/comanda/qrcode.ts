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
      private barcodeScanner: BarcodeScanner) {}
  
      generateCode() : string {
        var data = new Date();
        var dataHora = data.getDate();
        return this.userId + '|' + this.estabelecimentoId + '|' + dataHora 
      }
  
    createCode() {
      this.createdCode = this.generateCode();    
    }
  }