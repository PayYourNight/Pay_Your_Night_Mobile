import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeioPagamentoPage } from './meio-pagamento';

@NgModule({
  declarations: [
    MeioPagamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(MeioPagamentoPage),
  ],
})
export class MeioPagamentoPageModule {}
