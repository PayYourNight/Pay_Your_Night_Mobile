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
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { AguardandoPagamentoPage } from '../aguardando-pagamento/aguardando-pagamento';
import { ConfirmacaoPagamentoPage } from '../confirmacao-pagamento/confirmacao-pagamento';
import { SaldoService } from '../../services/saldo-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  resCheckin: any;
  usuario: any;
  saldoPontuacao: number = 0;

  constructor(
    private modalCtrl: ModalController, 
    private socket: Socket,
    private events: Events,
    private alertCtrl: AlertController,
    private checkin: CheckinProvider,
    private navCtrl: NavController,
    private saldoService: SaldoService) {

    var u: any = localStorage.getItem("user");
    this.usuario = JSON.parse(u);        
    this.verificarCheckin();

    this.socket.on("checkin", (data) => {
      console.log('checkin realizado no usuário');
      this.setLocalStorage(data);      
      this.openComanda();
      this.presentAlert();
    });

    this.socket.on("checkout", (data) => {
      console.log(data);
    });

    events.subscribe('checkin:started', (user, time) => {     
      this.openComanda();
    });

    this.saldoService.getSaldo().subscribe((data) => {
      if (data) {
        var value: any = data;
        this.saldoPontuacao = value.totalPontuacao;
      }
    });
  }

  verificarCheckin() {
    this.checkin.verificar()
      .subscribe((data) => {        
        if (data) {
          this.resCheckin = data;
          if (this.resCheckin.consumo_transferido) {
            this.navCtrl.setRoot(AguardandoPagamentoPage);
          } else {
            this.openComanda();
          }
        } 
      },
      (error) => {
        this.checkin.verificarAguardando()
          .subscribe((data) => {
            if (data) {
              this.navCtrl.setRoot(ConfirmacaoPagamentoPage);
            }
          });
      });
  }

  getValue(): string {
    var data = new Date();
    return this.usuario._id + '|' + data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear() + " " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();  
  }

  setLocalStorage(data) {
    localStorage.setItem("estabelecimento", data.estabelecimento);
  }

  openModalQR() {
    this.navCtrl.push(BarcodePage, { value: this.getValue() });
  }

  openComanda() {
    this.navCtrl.setRoot(ComandaPage);
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


