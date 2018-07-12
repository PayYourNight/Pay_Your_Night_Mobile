import { Component } from '@angular/core';
import { ToastService } from '../../../services/toast-service';
import { LoadingService } from '../../../services/loading-service';
import { MeioPagamentoProvider } from '../../../provider/meiopagamento';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-novo-meio-pagamento',
  templateUrl: 'novo-meio-pagamento.html'
})
export class NovoMeioPagamentoPage {

  private isBandeiraValid: boolean = true;
  private isNumeroValid: boolean = true;
  private isDataValid: boolean = true;
  private isCodigoValid: boolean = true;

  private cart_numero: string;
  private cart_data_val: string;
  private cart_bandeira: string;
  private cart_cod_seg: string;

  constructor(
    private meiopagamento: MeioPagamentoProvider,
    private toast: ToastService,
    private loading: LoadingService,
    private navCtr: NavController,
    public events: Events) { }


  cadastrar() {
    this.loading.show();
    this.meiopagamento.addMeioPagamento({      
      cart_numero: this.cart_numero,
      cart_data_val: this.cart_data_val,
      cart_bandeira: this.cart_bandeira,
      cart_cod_seg: this.cart_cod_seg
    }).subscribe(
      (data) => {

        if (data) {
          this.toast.presentToast("Meio da pagamento incluído com sucesso!");
          this.events.publish('cart:created');
          this.navCtr.pop();
        }

      },
      (error) => {

        throw new Error(error);

      });
    this.loading.hide();
  }
}
