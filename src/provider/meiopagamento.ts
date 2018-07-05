import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalsProvider } from './globals';

@Injectable()
export class MeioPagamentoProvider {
  public headers = new HttpHeaders();
  user: any;

  constructor(public http: HttpClient, private globals: GlobalsProvider) {

    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);

  }

  getMeiosPagamento() {
    return this.http
      .get(this.globals.baseUrl + '/api/users/meiopagamento/?usuarioid=' + this.user._id);
  }

  getMeioPagamento() {

  }
}
