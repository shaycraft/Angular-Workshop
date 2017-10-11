import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  private title: string;

  constructor() { }

  ngOnInit() {
    this.title = "My Tiny App";
  }

}
