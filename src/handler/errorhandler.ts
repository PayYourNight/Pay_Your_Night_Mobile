import { ErrorHandler, Injectable } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import * as Sentry from 'sentry-cordova';

@Injectable()
export class MyErrorHandler extends IonicErrorHandler implements ErrorHandler {

  constructor(private toastCtrl: ToastController) {
    super();
  }

  handleError(err: any): void {
    if (err.status == 500) {
      console.log('Error: ' + err.message);
      Sentry.captureException(err);
      //super.handleError(err);
      this.presentToast();
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: "Desculpe, alguma coisa saiu errada :(",
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
}
