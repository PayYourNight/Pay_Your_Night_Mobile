import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { LoadingService } from './loading-service'
import { HomePage } from '../pages/home/home';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { HistoricoPage } from '../pages/historico/historico';
import { PontuacaoPage } from '../pages/pontuacao/pontuacao';
import { MeiosPagamentoPage } from '../pages/meiospagamento/meiospagamento';
import { PerfilPage } from '../pages/perfil/perfil';

@Injectable()
export class MenuService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) {}

    getId = ():string => 'menu';

    getTitle = ():string => 'UIAppTemplate';

    getAllThemes = (): Array<any> => {
      return [
        { "title": "Home", "theme": "listViews", "icon": "icon-home", "component": HomePage, "singlePage": true },
        { "title": "Perfil", "theme": "listViews", "icon": "icon-account", "component": PerfilPage, "singlePage": true },
        { "title": "Meios de Pagamento", "theme": "listViews", "icon": "icon-credit-card", "component": MeiosPagamentoPage, "singlePage": true },
        { "title": "Pontuação", "theme": "listViews", "icon": "icon-coin", "component": PontuacaoPage, "singlePage": true },
        { "title": "Historico", "theme": "listViews", "icon": "icon-history", "component": HistoricoPage, "singlePage": true },
        { "title": "Configurações", "theme": "listViews", "icon" : "icon-cellphone-settings", "component": ConfiguracoesPage, "singlePage": true }
      ];
    };

    getDataForTheme = () => {
      return {
        "background": "assets/images/background/1.jpg",
        "image": "assets/images/logo/1.png",
        "title": "Pay Your Night",
        "description": "Por um mundo mais conectado e divertido!"
      };
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    prepareParams = (item: any) => {
      return {
        title: item.title,
        data: {},
        events: this.getEventsForTheme(item)
      };
    };

    load(item: any): Observable<any> {
      var that = this;
      that.loadingService.show();
      if (AppSettings.IS_FIREBASE_ENABLED) {
        return new Observable(observer => {
          this.af
            .object('menu')
            .valueChanges()
            .subscribe(snapshot => {
              that.loadingService.hide();
              observer.next(snapshot);
              observer.complete();
            }, err => {
              that.loadingService.hide();
              observer.error([]);
              observer.complete();
            });
        });
      } else {
        return new Observable(observer => {
          that.loadingService.hide();
          observer.next(this.getDataForTheme());
          observer.complete();
        });
      }
    }
}
