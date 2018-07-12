import { Component } from '@angular/core';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  user: any;

  constructor() {

    this.user = JSON.parse(localStorage.getItem("user"));

    console.log(this.user);

  }
  
}
