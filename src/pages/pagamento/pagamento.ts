import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MeioPagamentoProvider } from '../../provider/meiopagamento';
import { PagamentoProvider } from '../../provider/pagamento';
import { ConfirmacaoPagamentoPage } from '../confirmacao-pagamento/confirmacao-pagamento';
import { Socket } from 'ng-socket-io';


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
  totalPontos: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private mp: MeioPagamentoProvider,
    private pagamento: PagamentoProvider,
    private socket: Socket) {

    this.totalPagar = 0;
    this.totalPontos = 0;
    this.total = navParams.get("total");
    this.meiospagamento = this.getMeiosPagamento();

    this.consumos.push({
      usuario: "Meu Consumo",
      total: this.total
    });
  }

  getMeiosPagamento(): any {
    this.mp.getMeiosPagamento().subscribe((data) => {
      this.meiospagamento = data;
    });
  }

  scanCode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      var code: any = barcodeData;
      var split: Array<string> = code.split("|");
      this.user_id = split[0];
      this.incluirConsumo();

    }, (err) => {
      throw new Error(err);
    });
  }

  incluirConsumo(): void {
    throw new Error("Method not implemented.");
  }

  incluirConsumoMock() {

  }

  abrirLeitorIncluirConsumo() {

  }

  pagar() {
    this.pagamento.pagar(this.meioPagamento, this.pagarPYNCoin)
      .subscribe(
      (data) => {
        if (data) {
          this.confirmarPagamento();
          this.emitirSocketPagamentorealizado();
        }
      },
      (error) => {
        throw new Error(error);
      });
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

}
