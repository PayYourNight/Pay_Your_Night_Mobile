import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfirmacaoPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

    var value = navParams.get('userid');
    this.createdCode = value;

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
