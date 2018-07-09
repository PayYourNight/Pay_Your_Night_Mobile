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
  user: any;

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner) {

    this.user = localStorage.getItem("user");
    this.createCode();

  }

  generateCode(): string {
    var data = new Date();
    return this.user._id + '|' + data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear() + " " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
  }

  createCode() {
    this.createdCode = this.generateCode();
  }
}
