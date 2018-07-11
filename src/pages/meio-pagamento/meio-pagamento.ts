import { Component } from '@angular/core';
import { MeioPagamentoProvider } from '../../provider/meiopagamento';

@Component({
  selector: 'page-meios-pagamento',
  templateUrl: 'meio-pagamento.html'
})
export class MeioPagamentoPage {
  meiospagamento: any;
  constructor(private meiopagamento: MeioPagamentoProvider) {

    this.meiopagamento.getMeiosPagamento()
      .subscribe((data) => {

        this.meiospagamento = data;

      });
  }

}
