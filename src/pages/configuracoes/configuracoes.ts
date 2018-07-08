import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html'
})
export class ConfiguracoesPage {

  constructor(public navCtrl: NavController) { }

  logout() {
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);        
  }
}
