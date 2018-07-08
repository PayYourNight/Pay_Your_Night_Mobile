import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Socket } from 'ng-socket-io';


@Component({
  selector: 'page-qrcode-checkin',
  templateUrl: 'qrcodeconsumo.html'
})
export class QrcodeCheckinPage {
  constructor(
    private barcodeScanner: BarcodeScanner,
    public viewCtrl: ViewController,
    private socket: Socket
  ) { }

  scanCode() {
    this.barcodeScanner.scan().then((data) => {

    }, (err) => {
      console.log('Error: ', err);
    });
  }
}
