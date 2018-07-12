import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalsProvider } from './globals';

@Injectable()
export class UsuarioProvider {
  public headers = new HttpHeaders();
  user: any;

  constructor(public http: HttpClient, private globals: GlobalsProvider) {

    //this.user = localStorage.getItem("user");
    //this.user = JSON.parse(this.user);

  }

  cadastrar(usuario) {
    return this.http
      .post(this.globals.baseUrl + '/api/auth/signup', usuario);
  }

}
