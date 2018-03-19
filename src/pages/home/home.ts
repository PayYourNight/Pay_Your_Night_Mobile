import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {}

  openModal() {
    let modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
  }
}

export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
