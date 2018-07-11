import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsProvider } from '../provider/globals';

@Injectable()
export class SaldoService {
  saldoPontuacao: string;
  url: string = "/api/saldo/?usuarioid=";
  user: any;

  constructor(private http: HttpClient, private globals: GlobalsProvider) {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log('buscando saldo');
    console.log(this.user);
  }

  getSaldo() {
    return this.http.get(this.globals.baseUrl + this.url + this.user._id);
  }
}
