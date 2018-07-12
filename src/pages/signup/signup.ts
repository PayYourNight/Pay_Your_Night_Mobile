import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingService } from '../../services/loading-service';
import { ToastService } from '../../services/toast-service';
import { UsuarioProvider } from '../../provider/usuario';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {
  //@Input() data: any;
  //@Input() events: any;

  public username: string;
  public password: string;
  public country: string;
  public city: string;
  public email: string;

  private isEmailValid: boolean = true;
  private isUsernameValid: boolean = true;
  private isPasswordValid: boolean = true;
  private isCityValid: boolean = true;
  private isCountryValid: boolean = true;
  private data: any;

  private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private loadingService: LoadingService,
    private toastCtrl: ToastService,
    private usuario: UsuarioProvider,
    private navCtr: NavController) {

    this.data = {
      "toolbarTitle": "Register + logo",
      "logo": "assets/images/logo/2.png",
      "register": "register",
      "title": "Register your new account",
      "username": "Enter your username",
      "city": "Your home town",
      "country": "Where are you from?",
      "password": "Enter your password",
      "email": "Your e-mail address",
      "skip": "Skip",
      "lableUsername": "USERNAME",
      "lablePassword": "PASSWORD",
      "lableEmail": "E-MAIL",
      "lableCountry": "COUNTRY",
      "lableCity": "CITY",
      "errorUser": "Field can't be empty.",
      "errorPassword": "Field can't be empty.",
      "errorEmail": "Invalid email address.",
      "errorCountry": "Field can't be empty.",
      "errorCity": "Field can't be empty."
    };
  }

  onRegister(params) {
    if (this.validate()) {
      this.loadingService.show();
      this.usuario.cadastrar({
        username: this.username,
        email: this.email,
        password: this.password
      }).subscribe(
        (data) => {
        this.loadingService.hide();
        this.navCtr.pop();
        },
        (error) => {
          throw new Error(error);
        });
    }
  }

  onSkip(params) {
    this.toastCtrl.presentToast('onSkip');
  }

  validate(): boolean {
    this.isEmailValid = true;
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    this.isCityValid = true;
    this.isCountryValid = true;

    if (!this.username || this.username.length == 0) {
      this.isUsernameValid = false;
    }

    if (!this.password || this.password.length == 0) {
      this.isPasswordValid = false;
    }

    if (!this.password || this.password.length == 0) {
      this.isPasswordValid = false;
    }

    if (!this.city || this.city.length == 0) {
      this.isCityValid = false;
    }

    if (!this.country || this.country.length == 0) {
      this.isCountryValid = false;
    }

    this.isEmailValid = this.regex.test(this.email);

    return this.isEmailValid &&
      this.isPasswordValid &&
      this.isUsernameValid &&
      this.isCityValid &&
      this.isCountryValid;
  }
}
