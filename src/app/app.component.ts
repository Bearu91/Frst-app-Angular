import { Component } from '@angular/core';
import { MenuItem } from "primeng/api";
import {Task} from "./task-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items!: MenuItem[];
  title!: string;



  ngOnInit() {
    this.items = [
      {label: 'Zadania', routerLink: '/tasks'},
      {label: 'Dodaj Zadanie', routerLink: '/add'}
    ];
  }
}
