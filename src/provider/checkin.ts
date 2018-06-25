import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckinProvider {
  private user: any;
  private token: String;
  private apiUrl = 'http://localhost:3000/api/checkin/ativo';


  constructor(public http: HttpClient) {
    console.log('Hello CheckinProvider Provider');
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  //TODO
  verificar(usuario_id: string) {
    console.log('realizando verificação de checkin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(this.token || {})
      })
    };

    return this.http.get(this.apiUrl + "/?usuarioid=" + usuario_id, httpOptions);

  }
}
