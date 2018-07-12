import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalsProvider } from './globals';

@Injectable()
export class HistoricoProvider {
  public headers = new HttpHeaders();
  user: any;

  constructor(private http: HttpClient, private globals: GlobalsProvider) {

    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);

  }

  getHistorico() {
    return this.http
      .get(this.globals.baseUrl + '/api/users/consumo/historico/?usuarioid=' + this.user._id);
  }

  getDetalhe(checkinid) {
    return this.http
      .get(this.globals.baseUrl + '/api/users/consumo/historico/detalhe/?checkinid=' + checkinid);
  }
}
