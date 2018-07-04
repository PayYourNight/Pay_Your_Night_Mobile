import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SaldoService {
  saldoPontuacao: string;
  url: string = "http://localhost:3000/api/saldo/?usuarioid=";
  user: any;

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log('buscando saldo');
    console.log(this.user);
  }

  getSaldo(): number {
    this.http.get(this.url + this.user._id)
      .subscribe((data) => {
        console.log(data);
        //return data.saldoPontuacao;
      });

    return 0;
  }
}
