//ionic serve -p 8101 -r 8102 --dev-logger-port 8103
import { Component } from '@angular/core';
import { 
  ModalController, 
  Platform, 
  NavParams, 
  ViewController, 
  Events, 
  AlertController 
} from 'ionic-angular';

import { BarcodePage } from './../barcode/barcode';
import { ComandaPage } from './../comanda/comanda';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userId = '28383794-7ab5-41a8-8272-9fc18f8df786';

  constructor(
    public modalCtrl: ModalController, 
    private socket: Socket,
    public events: Events,
    public alertCtrl: AlertController) {

      this.socket.on("checkin", (data)=> {
        console.log(data);
        this.setLocalStorage(data);
        this.openModalComanda();
      });

      this.socket.on("checkout", (data)=> {
        console.log(data);
      });

    events.subscribe('checkin:started', (user, time) => {
      console.log(user);
      //this.showAlert();

      this.openModalComanda();
    });
  }

  getValue(): string {
    var data = new Date();
    return this.userId + '|' + data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear() + " " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();  
  }

  setLocalStorage(data) {
    localStorage.setItem("estabelecimento", data.estabelecimento);
  }

  //showAlert() {
  //  let alert = this.alertCtrl.create({
  //    title: 'Check-in',
  //    subTitle: 'Você agora faz parte do evento!',
  //    buttons: ['OK']
  //  });
  //  alert.present();
  //}

  openModalQR() {
    let modal = this.modalCtrl.create(BarcodePage, { value : this.getValue() });
    modal.present();    
  }

  openModalComanda() {
    let modal = this.modalCtrl.create(ComandaPage);
    modal.present();
  }  
}


