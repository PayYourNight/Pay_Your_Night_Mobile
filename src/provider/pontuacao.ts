import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalsProvider } from './globals';

@Injectable()
export class PontuacaoProvider {
  public headers = new HttpHeaders();
  user: any;

  constructor(
    public http: HttpClient,
    private globals: GlobalsProvider) {

    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
  }

  buscar() {
    return this.http
      .get(this.globals.baseUrl + '/api/saldos/?usuarioid=' + this.user._id);
  }

}
