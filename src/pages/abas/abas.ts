import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';


@Component({
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    </ion-content>
`})
export class TabIconContentPage {
    isAndroid: boolean = false;

    constructor(platform: Platform) {
        this.isAndroid = platform.is('android');
    }
}

@Component({
    template: `
  <ion-tabs class="tabs-icon">
    <ion-tab tabIcon="cart" [root]="rootPage"></ion-tab>
    <ion-tab tabIcon="search" [root]="rootPage"></ion-tab>
    <ion-tab tabIcon="barcode" [root]="rootPage"></ion-tab>
  </ion-tabs>
`})
export class IconPage {
    rootPage = TabIconContentPage;

    isAndroid: boolean = false;

    constructor(platform: Platform) {
        this.isAndroid = platform.is('android');
    }
}
