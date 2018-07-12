import { Component } from '@angular/core';
import { ViewController, Events, NavParams  } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Socket } from 'ng-socket-io';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { MeioPagamentoProvider } from '../../provider/meiopagamento';
 
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
    private meiopagamento: MeioPagamentoProvider,
    private navCtrl: NavController
  ) {

    this.meiopagamento.getMeiosPagamento()
      .subscribe((data) => {
        if (!data) {

        }
      });

    var value = params.get('value');
    this.createdCode = value;
    //this.socket.on('checkin', (data) => {

    //  })
  }
}
