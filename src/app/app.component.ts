import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PerfilPage } from '../pages/perfil/perfil';
//import { MeiosPagamentoPage } from '../pages/meiospagamento/meiosPagamento';
import { PontuacaoPage } from '../pages/pontuacao/pontuacao';
import { HistoricoPage } from '../pages/historico/historico';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { ComandaPage } from '../pages/comanda/comanda';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { BarcodePage } from '../pages/barcode/barcode';
import { IconPage as TabIconPage, TabIconContentPage } from '../pages/abas/abas';
//import { ComandaPage } from '../pages/comanda/comanda';
import { TabConsumoContentPage  } from '../pages/comanda/consumo';
import { TabBuscaProdutosContentPage } from '../pages/comanda/produtos';
import { TabQrcodeConsumoContentPage } from '../pages/comanda/qrcode';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { MenuService } from '../services/menu-service';
import { IService } from '../services/IService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: any;
  params: any;
  leftMenuTitle: string;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menu: MenuController,
    private menuService: MenuService) {
    this.initializeApp();

    this.pages = menuService.getAllThemes();
    this.leftMenuTitle = menuService.getTitle();

    this.menuService.load(null).subscribe(snapshot => {
      this.params = snapshot;
    });


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // openPage(page) {
  //   this.nav.setRoot(page.component);
  // }

  openPage(page) {
    if (page.singlePage) {
      this.menu.open();
      this.nav.push(page.component);
    }
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    //if (page.singlePage) {
    //    this.menu.open();
    //    this.nav.push(this.getPageForOpen(page.theme), {
    //      service: this.getServiceForPage(page.theme),
    //      page: page,
    //      componentName: page.theme
    //    });
    //} else {
    //  this.nav.setRoot("ItemsPage", {
    //    componentName: page.theme
    //  });
    //}
  }

  getPageForOpen(value: string): any {
    return null;
  }

  getServiceForPage(value: string): IService {
    return null;
  }
}
