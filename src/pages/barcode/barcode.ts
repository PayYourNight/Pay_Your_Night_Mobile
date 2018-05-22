import { Component } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Socket } from 'ng-socket-io';
 
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})
export class BarcodePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  userId = '28383794-7ab5-41a8-8272-9fc18f8df786';
  
  constructor(
    private barcodeScanner: BarcodeScanner, 
    public viewCtrl: ViewController, 
    private socket: Socket,
    public events: Events) { 

      this.socket.on('checkin', (data) => {
        console.log('checkin realizado.');
        this.criarcheckinMOCK();
      })
    this.createCode();
  }
  
  generateCode() : string {
    var data = new Date();
    var dataHora = data.getDate();
    return this.userId + '|' + dataHora 
  }

  createCode() {
    this.createdCode = this.generateCode();    
  }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  criarcheckinMOCK(){
    var splitted = this.createdCode.split("|");    
    window.localStorage.checkin = {
      userId : splitted[0],
      dataHora : splitted[1]
    }

    this.events.publish('checkin:started', {
      userId : splitted[0],
      dataHora : splitted[1]
    }, Date.now());

    this.viewCtrl.dismiss();
  }
}