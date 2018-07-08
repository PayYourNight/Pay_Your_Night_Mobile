import { Component } from '@angular/core';
import { ViewController, Events, NavParams  } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Socket } from 'ng-socket-io';
import { NavController } from 'ionic-angular/navigation/nav-controller';
 
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})
export class BarcodePage {
  createdCode = null;
  
  constructor(
    private barcodeScanner: BarcodeScanner, 
    private viewCtrl: ViewController, 
    private socket: Socket,
    private events: Events,
    private params: NavParams,
    private navCtrl: NavController
  ) { 

    var value = params.get('value');
    this.createdCode = value;
    this.socket.on('checkin', (data) => {
      this.navCtrl.pop();
      })
  }
}
