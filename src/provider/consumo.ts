import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from './globals';

@Injectable()
export class ConsumoProvider {
  user: any;
  token: String;
  httpOptions: any;

  constructor(public http: HttpClient, private globals: GlobalsProvider) {
    console.log('Hello CheckinProvider Provider');
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(this.token || {})
      })
    };
  }

  //TODO
  getConsumo(usuario_id: string) {
    console.log('realizando busca de consumo');

    return this.http.get(this.globals.baseUrl + "/api/consumo/?usuarioid=" + usuario_id, this.httpOptions);
  }

  incluirConsumo() {
    var body = JSON.stringify({});

    return this.http.post(this.globals.baseUrl + "/api/consumo/incluirconsumo", body, this.httpOptions);
  }

}
