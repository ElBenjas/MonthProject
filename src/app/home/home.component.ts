import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'app';
  welcome = 'Welcome home';
  result = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('https://comidita.herokuapp.com').subscribe(data => {
      console.log(data);
    });
  }
}
