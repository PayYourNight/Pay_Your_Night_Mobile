import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import { ComandaPage } from '../pages/comanda/comanda';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { LoginPage } from '../pages/login/login';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { IconPage as TabIconPage, TabIconContentPage } from '../pages/abas/abas';
import { ComandaPage as TabComandaPage, TabComandaContentPage, TabBuscaProdutosContentPage } from '../pages/comanda/comanda';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Comanda', component: TabComandaPage },
      { title: 'Pagamento', component: PagamentoPage },
      { title: 'Login', component: LoginPage },
      { title: 'Signin', component: SigninPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Abas', component: TabIconPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
