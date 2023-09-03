import { Component } from '@angular/core';
import * as userdata from '../assets/users.json'; //json-Datei importieren

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-list-app';
  globalUserData: any;        //globale Variable deklarieren

  constructor() {
    // Weise die importieren Daten der globalen Variable zu
    this.globalUserData = userdata;    
  }
    

}