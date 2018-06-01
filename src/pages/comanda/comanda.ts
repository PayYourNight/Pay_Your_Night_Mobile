import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { TabConsumoContentPage } from '../comanda/consumo';
import { TabBuscaProdutosContentPage } from '../comanda/produtos';
import { TabQrcodeConsumoContentPage } from '../comanda/qrcode'

@Component({
  template: `
  <ion-tabs class="tabs-icon">
    <ion-tab tabIcon="cart" [root]="page1"></ion-tab>
    <ion-tab tabIcon="search" [root]="page2"></ion-tab>
    <ion-tab tabIcon="barcode" [root]="page3"></ion-tab>
  </ion-tabs>
`})
export class ComandaPage {
  page1 = TabConsumoContentPage;
  page2 = TabBuscaProdutosContentPage;
  page3 = TabQrcodeConsumoContentPage;

  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}