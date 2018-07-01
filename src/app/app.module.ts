import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io'
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PerfilPage } from '../pages/perfil/perfil';
import { MeiosPagamentoPage } from '../pages/meiospagamento/meiospagamento';
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


let config: SocketIoConfig = {
  //url: "http://10.0.2.2:3000/",'
  url: "http://localhost:3000/",
  options: {}
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    MeiosPagamentoPage,
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
    MeiosPagamentoPage,
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
    SaldoService
  ]
})
export class AppModule {}
