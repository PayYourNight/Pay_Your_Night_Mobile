import { Component } from '@angular/core';
import { MeioPagamentoProvider } from '../../provider/meiopagamento';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NovoMeioPagamentoPage } from './novo/novo-meio-pagamento';
import { Events } from 'ionic-angular/util/events';

@Component({
  selector: 'page-meios-pagamento',
  templateUrl: 'meio-pagamento.html'
})
export class MeioPagamentoPage {
  meiospagamento: any;
  constructor(private meiopagamento: MeioPagamentoProvider, private navCtr: NavController, public events: Events) {

    events.subscribe('cart:created', () => {
      
      this.buscar();
    });

    this.buscar();
  }

  novo() {
    this.navCtr.push(NovoMeioPagamentoPage);
  }

  buscar() {
    this.meiopagamento.getMeiosPagamento()
      .subscribe((data) => {

        console.log(data);
        this.meiospagamento = data;

      });

  }

}
