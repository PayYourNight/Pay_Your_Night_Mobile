import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {
    selectedItem: any;
    icons: string[];
    items: Array<{ title: string, note: string, icon: string }>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
