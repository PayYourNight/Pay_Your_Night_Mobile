import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io'
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as Sentry from 'sentry-cordova';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PerfilPage } from '../pages/perfil/perfil';
import { HistoricoPage } from '../pages/historico/historico';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { BarcodePage } from '../pages/barcode/barcode';
import { IconPage as TabIconPage, TabIconContentPage } from '../pages/abas/abas';
import { ComandaPage } from '../pages/comanda/comanda';
import { TabConsumoContentPage  } from '../pages/comanda/consumo';
import { TabBuscaProdutosContentPage } from '../pages/comanda/produtos';
import { TabQrcodeConsumoContentPage } from '../pages/comanda/qrcode';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PontuacaoPage } from '../pages/pontuacao/pontuacao';
import { CheckinProvider } from '../provider/checkin';
import { ConsumoProvider } from '../provider/consumo';
import { MenuService } from '../services/menu-service';
import { AppSettings } from '../services/app-settings';
import { LoadingService } from '../services/loading-service';
import { LoginProvider } from '../provider/login';
import { MyErrorHandler } from '../handler/errorhandler';
import { SaldoService } from '../services/saldo-service';
import { MeioPagamentoProvider } from '../provider/meiopagamento';
import { GlobalsProvider } from '../provider/globals';
import { PagamentoProvider } from '../provider/pagamento';

let config: SocketIoConfig = {
  //url: "http://10.0.2.2:3000/",'
  //url: "http://localhost:3000/",
  url: "https://intense-journey-43070.herokuapp.com",
  options: {}
}

Sentry.init({ dsn: 'https://f03681840bd841d3b1fa4250a16b1915@sentry.io/1237023' });

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,    
    PontuacaoPage,
    HistoricoPage,
    ConfiguracoesPage,
    ComandaPage,
    TabConsumoContentPage,
    TabBuscaProdutosContentPage,
    TabQrcodeConsumoContentPage,
    PagamentoPage,
    LoginPage,    
    SignupPage,
    BarcodePage,
    TabIconPage,
    TabIconContentPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule, 
    SocketIoModule.forRoot(config),
    HttpClientModule,
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,    
    PontuacaoPage,
    HistoricoPage,
    ConfiguracoesPage,
    ComandaPage,
    TabConsumoContentPage,
    TabBuscaProdutosContentPage,
    TabQrcodeConsumoContentPage,
    PagamentoPage,
    LoginPage,    
    SignupPage,
    BarcodePage,
    TabIconPage,
    TabIconContentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: MyErrorHandler },
    BarcodeScanner,
    CheckinProvider,
    ConsumoProvider,
    MenuService,
    LoadingService,
    LoginProvider,
    SaldoService,
    MeioPagamentoProvider,
    GlobalsProvider,
    PagamentoProvider
  ]
})
export class AppModule {}
