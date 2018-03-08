import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts = null;
  constructor(private http: HttpClient) {
    this.http.get('https://comidita.herokuapp.com').subscribe(data => {
      this.posts = data
    });
  }

  ngOnInit() {}
}
