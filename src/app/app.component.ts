import { Component } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items!: MenuItem[];
  title: any;


  ngOnInit() {
    this.items = [
      {label: 'Zadania', routerLink: '/tasks'},
      {label: 'Dodaj Zadanie', routerLink: '/add'}
    ];
  }
}
