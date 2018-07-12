import { Component } from '@angular/core';
import { MeioPagamentoProvider } from '../../provider/meiopagamento';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NovoMeioPagamentoPage } from './novo/novo-meio-pagamento';

@Component({
  selector: 'page-meios-pagamento',
  templateUrl: 'meio-pagamento.html'
})
export class MeioPagamentoPage {
  meiospagamento: any;
  constructor(private meiopagamento: MeioPagamentoProvider, private navCtr: NavController) {

    this.meiopagamento.getMeiosPagamento()
      .subscribe((data) => {

        console.log(data);
        this.meiospagamento = data;

      });
  }

  novo() {
    this.navCtr.push(NovoMeioPagamentoPage);
  }

}
