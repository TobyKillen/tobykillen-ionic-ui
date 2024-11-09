import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    // { title: 'Contact', url: '/contact', icon: 'call' },

  ];
  constructor() {}
}
