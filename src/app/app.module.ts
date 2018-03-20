import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComandaPage } from '../pages/comanda/comanda';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { LoginPage } from '../pages/login/login';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { IconPage as TabIconPage, TabIconContentPage } from '../pages/abas/abas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ComandaPage,
    PagamentoPage,
    LoginPage,
    SigninPage,
    SignupPage,
    TabIconPage,
    TabIconContentPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ComandaPage,
    PagamentoPage,
    LoginPage,
    SigninPage,
    SignupPage,
    TabIconPage,
    TabIconContentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
