import { Component } from '@angular/core';
import { ViewController, Events, NavParams  } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Socket } from 'ng-socket-io';
 
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})
export class BarcodePage {
  createdCode = null;
  
  constructor(
    private barcodeScanner: BarcodeScanner, 
    public viewCtrl: ViewController, 
    private socket: Socket,
    public events: Events,
    public params: NavParams) { 

    var value = params.get('value');
    console.log(value);
    this.createdCode = value;
      this.socket.on('checkin', (data) => {
        console.log('checkin realizado. popup de qrcode fechado');
        this.viewCtrl.dismiss();
      })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  //criarcheckinMOCK(){
  //  var splitted = this.createdCode.split("|");    
  //  window.localStorage.checkin = {
  //    userId : splitted[0],
  //    dataHora : splitted[1]
  //  }

  //  this.events.publish('checkin:started', {
  //    userId : splitted[0],
  //    dataHora : splitted[1]
  //  }, Date.now());

  //  this.viewCtrl.dismiss();
  //}
}
