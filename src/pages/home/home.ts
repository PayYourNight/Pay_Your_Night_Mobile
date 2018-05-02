import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController} from 'ionic-angular';
import { BarcodePage } from './../barcode/barcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {}

  openModal() {
    let modal = this.modalCtrl.create(BarcodePage);
    modal.present();
  }
}


