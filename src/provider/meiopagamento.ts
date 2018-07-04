import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MeioPagamentoProvider {
  public headers = new HttpHeaders();
  user: any;
  
  constructor(public http: HttpClient) {

    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
    console.log(this.user);
  }

  getMeiosPagamento() {
    return this.http
      //.post('http://10.0.2.2:3000/api/auth/authenticate', credentials);
      .get('http://localhost:3000/api/users/meiopagamento/?usuarioid=' + this.user._id);
  }

  getMeioPagamento() {

  }
}
