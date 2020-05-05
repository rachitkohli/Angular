import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // template: `<div>
  //             <h1>{{pageTitle}}</h1>
  //               <div>
  //                 <pm-products></pm-products>
  //               </div>
  //           </div>`
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  pageTitle: string = "Acme Product Managment"
}