import { Component, OnInit } from '@angular/core';
import { IPagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  p: number = 1;
  collection: any[]

  constructor() {}

  ngOnInit(): void {

  }
}
