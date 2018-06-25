import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { PagamentoPage } from '../pagamento/pagamento';
import { Socket } from 'ng-socket-io';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ConsumoProvider } from '../../provider/consumo';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@Component({
  selector: 'page-consumo',
  templateUrl: 'consumo.html'
})
export class TabConsumoContentPage {
  private usuario_id: string = "5b2ddebc2f2a7b271811b206";
  private loading: any;
  public arrConsumo: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public socket: Socket,
    public consumo: ConsumoProvider,
    public loadingCtrl: LoadingController
  ) {

    this.loading = this.loadingCtrl.create({ spinner: 'dots' });

    this.buscarConsumo();

    this.socket.on("consumo", (data) => {
      console.log('consumo adicionado');
      this.buscarConsumo();
      this.presentAlert();
    });



    //var consumos = [];

    //consumos.push({
    //  id: 'c82acfba-b4cb-4f73-bb15-9157d02688ba',
    //  dataHora: '22:00 PM',
    //  valorTotal: 100,
    //  itensPedido: [
    //    {
    //      id: 'e7c32b54-1553-4f79-8d6c-0e098ea4445a',
    //      quantidade: '2',
    //      preco: '12.00',
    //      unidade: 'un',
    //      status: 'atendido',
    //      produto: {
    //        id: 'ef945d6e-ffd5-4af2-aa48-3bd15c4130c0',
    //        descricao: 'teste 01' 
    //      }
    //    },
    //    {
    //      id: 'd6f901f3-f2ab-47d2-b539-02e8dd594cff',
    //      quantidade: '2',
    //      preco: '12.00',
    //      unidade: 'un',
    //      status: 'atendido',
    //      produto: {
    //        id: 'd68a732b-bdb3-4c3b-a3ed-0ca629c55fbd',
    //        descricao: 'teste 02'
    //      }
    //    },
    //    {
    //      id: '95e166d1-d804-455e-8a1a-af30ba2c45bc',
    //      quantidade: '2',
    //      preco: '12.00',
    //      unidade: 'un',
    //      status: 'estornado',
    //      produto: {
    //        id: 'bb417be7-28a6-41f6-93f4-5c6fbb69930b',
    //        descricao: 'teste 03'
    //      }
    //    }
    //  ],      
    //});

    //this.pedidos.push({
    //  id: '1c4f73d7-cb23-49eb-945f-6f89f5825645',
    //  dataHora: '2:00 AM',
    //  itensPedido: [
    //    {
    //      id: 'e7c32b54-1553-4f79-8d6c-0e098ea4445a',
    //      quantidade: '2',
    //      preco: '12.00',
    //      unidade: 'un',
    //      status: 'atendido',
    //      produto: {
    //        id: 'e7c32b54-1553-4f79-8d6c-0e098ea4445a',
    //        descricao: 'teste 04'
    //      }
    //    }
    //  ],
    //});

    //window.localStorage.pedidos = this.pedidos;
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
    //this.loading.present();
    this.consumo.getConsumo(this.usuario_id)
      .subscribe((data) => {
        console.log(data);
        this.arrConsumo = data;
      });
    //this.loading.dismiss();
  }

  goToProdutoDetail(produto: any) {
  }

  doRefresh(event: any) {
  }

  goToPagamento() {
    this.navCtrl.push(PagamentoPage);
  }
}
