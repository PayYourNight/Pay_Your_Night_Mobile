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
import { CheckinProvider } from '../../provider/checkin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //TODO
  userId = '5b2ddebc2f2a7b271811b206';

  constructor(
    public modalCtrl: ModalController, 
    private socket: Socket,
    public events: Events,
    public alertCtrl: AlertController,
    public checkin: CheckinProvider) {

    //TODO trocar usuário id pelo do banco    
    this.checkin.verificar(this.userId)
      .subscribe((data) => {
        if (data) {          
          this.openModalComanda();
        }});

    this.socket.on("checkin", (data) => {
      console.log('checkin realizado no usuário');
      this.setLocalStorage(data);      
      this.openModalComanda();
      this.presentAlert();
    });

    this.socket.on("checkout", (data) => {
      console.log(data);
    });

    events.subscribe('checkin:started', (user, time) => {
      console.log(user);      

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

  openModalQR() {
    let modal = this.modalCtrl.create(BarcodePage, { value : this.getValue() });
    modal.present();    
  }

  openModalComanda() {
    let modal = this.modalCtrl.create(ComandaPage);
    modal.present();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Parabéns',
      subTitle: 'Agora vc faz parte deste evento lindo!!',
      buttons: ['Gratidão']
    });
    alert.present();
  }
}


