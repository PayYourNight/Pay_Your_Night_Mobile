import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MeioPagamentoProvider } from '../../provider/meiopagamento';
import { PagamentoProvider } from '../../provider/pagamento';
import { ConfirmacaoPagamentoPage } from '../confirmacao-pagamento/confirmacao-pagamento';
import { Socket } from 'ng-socket-io';
import { SaldoService } from '../../services/saldo-service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoadingService } from '../../services/loading-service';
import { ToastService } from '../../services/toast-service';


@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html'
})
export class PagamentoPage {

  meiospagamento: any;
  meioPagamento: any;
  user_id: string;
  total: any = 0;
  consumos: any = [];
  pagarPYNCoin: boolean;
  totalPagar: number;  
  saldoPontuacao: number;
  valortotalpagamento: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private mp: MeioPagamentoProvider,
    private pagamento: PagamentoProvider,
    private socket: Socket,
    private saldoService: SaldoService,
    private alertCtrl: AlertController,
    private loading: LoadingService,
    private toast: ToastService) {
    
    this.saldoService.getSaldo().subscribe((data) => {
      if (data) {
        var value: any = data;
        this.saldoPontuacao = value.totalPontuacao;
      }
    });

    this.totalPagar = 0;    
    this.total = navParams.get("total");
    this.meiospagamento = this.getMeiosPagamento();

    this.consumos.push({
      usuario: "Meu Consumo",
      total: this.total
    });

    this.doCalc();
  }

  getMeiosPagamento(): any {
    this.mp.getMeiosPagamento().subscribe((data) => {
      this.meiospagamento = data;
    });
  }

  scanCode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      if (barcodeData) {
        var code: any = barcodeData;
        var split: Array<string> = code.split("|");
        this.user_id = split[0];
        this.incluirConsumo();
        this.doCalc();
      }
    }, (err) => {
      throw new Error(err);
    });
  }

  doCalc() {
    var soma: number = 0;
    this.consumos.forEach(function (item) {
      soma += item.total;
    });
    this.totalPagar = soma;
    this.valortotalpagamento = this.totalPagar - this.saldoPontuacao;
  }

  incluirConsumo(): void {
    throw new Error("Method not implemented.");
  }

  incluirConsumoMock() {

  }

  abrirLeitorIncluirConsumo() {

  }

  pagar() {

    if (!this.meioPagamento) {

      this.toast.presentToast("É necessario selecionar um meio de pagamento");

      return;
    }

    this.loading.show();
    this.pagamento.pagar(this.meioPagamento, this.pagarPYNCoin)
      .subscribe(
      (data) => {
        if (data) {
          this.presentAlert();
        }
      },
      (error) => {
        this.loading.hide();
        throw new Error(error);
      });
    this.loading.hide();
  }


  confirmarPagamento(): any {
    this.navCtrl.setRoot(ConfirmacaoPagamentoPage, { userid: this.user_id });
  }

  emitirSocketPagamentorealizado(): any {
    this.socket.emit("pagamento", {
      type: 'pagamento',
      text: 'pagamento realizado!',
      created: Date.now(),
      usuario: {        
        _id: this.user_id
      }
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirmação de Pagamento',
      subTitle: 'Você já pode se dirigir a saída.',
      buttons: [
        {
          text: 'Ok',
          role: 'Ok',
          handler: () => {
            this.confirmarPagamento();
            this.emitirSocketPagamentorealizado();
          }
        }]
    });
    alert.present();
  }

}
