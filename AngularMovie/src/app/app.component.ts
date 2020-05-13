import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<div>
  //               <h1>{{pageTitle}}</h1>
  //               <app-home></app-home>
  //             <div>`
  template:    `<nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class='nav nav-pills'>
    <li><a class='nav-link' [routerLink]="['/home']">Home</a></li>
    <li><a class='nav-link' [routerLink]="['/movies']">Movies</a></li>
    <li><a class='nav-link' [routerLink]="['/card-records']">Card Records</a></li>
     </ul>
  </nav>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  pageTitle = 'Angular Movie';
}
