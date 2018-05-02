import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-barcode',
    templateUrl: 'barcode.html'
})

export class BarcodePage {
    selectedItem: any;
    icons: string[];
    items: Array<{ title: string, note: string, icon: string }>;

    constructor(
    	public navCtrl: NavController, 
    	public navParams: NavParams, 
    	public viewCtrl: ViewController) {

    }
}
