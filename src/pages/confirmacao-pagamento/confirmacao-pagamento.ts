import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@IonicPage()
@Component({
  selector: 'page-confirmacao-pagamento',
  templateUrl: 'confirmacao-pagamento.html',
})
export class ConfirmacaoPagamentoPage {
  createdCode: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private socket: Socket) {

    var user: any = JSON.parse(localStorage.getItem("user"));

    this.createdCode = user._id;

    console.log(user);

    this.socket.on("checkout", (data) => {
      this.presentAlert();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmacaoPagamentoPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Parabéns',
      subTitle: 'Vc já pode ir pra casa :)',
      buttons: [
        {
          text: 'Gratidão',
          role: 'cancel',
          handler: () => {
            this.confirmarCheckout();
          }
        }]
    });
    alert.present();
  }

  confirmarCheckout(): any {
    this.navCtrl.setRoot(HomePage);
  }
}
