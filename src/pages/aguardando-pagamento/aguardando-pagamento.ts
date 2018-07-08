import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-aguardando-pagamento',
  templateUrl: 'aguardando-pagamento.html',
})
export class AguardandoPagamentoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socket: Socket) {
    this.socket.on("pagamento", (data) => {
      console.log("pagamento recebido");
      this.navCtrl.setRoot(HomePage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AguardandoPagamentoPage');
  }

}
