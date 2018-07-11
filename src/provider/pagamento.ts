import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalsProvider } from './globals';

@Injectable()
export class PagamentoProvider {
  public headers = new HttpHeaders();
  user: any;

  constructor(public http: HttpClient, private globals: GlobalsProvider) {

    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);

  }

  pagar(meiopagamento_id, usarpyncoin) {
    var body = {
      usuario_id: this.user._id,
      meiopagamento_id: meiopagamento_id,
      usarpyncoin: usarpyncoin,
      origem: "app"
    }

    return this.http
      .post(this.globals.baseUrl + '/api/pagamentos', body);
  }

  incluirConsumo(usuarioid) {
    var body = {
      usuario_id: this.user._id,
      usuario_inclusao: usuarioid
    }

    return this.http
      .post(this.globals.baseUrl + '/api/pagamentos/incluirconsumo', JSON.stringify(body));
  }

  removerConsumo(usuarioid) {
    var body = {
      usuario_id: this.user._id,
      usuario_inclusao: usuarioid
    }

    return this.http
      .post(this.globals.baseUrl + '/api/pagamentos/removerconsumo', JSON.stringify(body));
  }

}
