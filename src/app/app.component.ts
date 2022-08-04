import { HttpClient } from '@angular/common/http';
import { Component, VERSION, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,retry } from 'rxjs';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  films: Observable<any>;

  constructor(private router: Router, private http: HttpClient) {}
  
  ngOnInit(){
      this.films = this.http.get('https://swapi.dev/api/films');
    }

  

  ionViewDidEnter() {}
}


