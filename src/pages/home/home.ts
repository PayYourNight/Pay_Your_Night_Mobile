//ionic serve -p 8101 -r 8102 --dev-logger-port 8103
import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController} from 'ionic-angular';
import { BarcodePage } from './../barcode/barcode';
import { ComandaPage } from './../comanda/comanda';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController, private socket: Socket) {
      this.socket.on("checkin", (data)=> {
      console.log(data);
      this.openModalComanda();
    });
    this.socket.on("checkout", (data)=> {
      console.log(data);
    });

  }

  openModalQR() {
    let modal = this.modalCtrl.create(BarcodePage);
    modal.present();
  }

  openModalComanda() {
    let modal = this.modalCtrl.create(ComandaPage);
    modal.present();
  }  
}


