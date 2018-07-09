import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { PagamentoPage } from '../pagamento/pagamento';
import { Socket } from 'ng-socket-io';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ConsumoProvider } from '../../provider/consumo';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { SaldoService } from '../../services/saldo-service';



@Component({
  selector: 'page-consumo',
  templateUrl: 'consumo.html'
})
export class TabConsumoContentPage {
  usuario: any;  
  loading: any;
  arrConsumo: any = null;
  total: string;
  saldoPontuacao: number;
  //TODO
  estabelecimento_nome: string = "Bar do Zé das Couves";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public socket: Socket,
    public consumo: ConsumoProvider,
    public loadingCtrl: LoadingController,
    public saldoService: SaldoService
  ) {

    this.usuario = JSON.parse(localStorage.getItem("user"));

    this.saldoPontuacao = this.saldoService.getSaldo();

    this.loading = this.loadingCtrl.create({ spinner: 'dots' });

    this.buscarConsumo();

    this.socket.on("consumo", (data) => {
      console.log('consumo adicionado');
      this.buscarConsumo();
      this.presentAlert();
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Parabéns',
      subTitle: 'Um pedido foi adicionado à sua comanda',
      buttons: ['Gratidão']
    });
    alert.present();
  }

  buscarConsumo(): any {
    this.consumo.getConsumo(this.usuario._id)
      .subscribe(
      (data) => {
        this.arrConsumo = data;
        this.total = this.getTotal();
      },
      (error) => {
        console.log(error);
      });
  }

  goToProdutoDetail(produto: any) {
    console.log(produto);
  }

  doRefresh(event: any) {
  }

  goToPagamento() {
    this.navCtrl.push(PagamentoPage, { total: this.total });
  }

  getTotal(): any {
    let total: number = 0;
    this.arrConsumo.forEach(function (item) {
      item.produtosConsumo.forEach(function (item) {
        total += item.produto_valor;
      });
    });
    return total;
  }
}
