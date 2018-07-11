import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from './globals';

@Injectable()
export class CheckinProvider {
  private user: any;
  private token: String;
  private apiUrl = '/api/checkin/ativo';


  constructor(public http: HttpClient, private globals: GlobalsProvider) {
    console.log('Hello CheckinProvider Provider');
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
  }
  
  verificar() {
    console.log('realizando verificação de checkin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(this.token || {})
      })
    };

    return this.http.get(this.globals.baseUrl + "/api/checkin/ativo/?usuarioid=" + this.user._id, httpOptions);
  }

  verificarAguardando() {
    console.log('realizando verificação de checkin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(this.token || {})
      })
    };

    return this.http.get(this.globals.baseUrl + "/api/checkin/confirmacao/?usuarioid=" + this.user._id, httpOptions);
  }
}
