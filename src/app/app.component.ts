import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <section>
                <header>{{ title }} list:</header>
                <router-outlet></router-outlet>
              </section>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '';

  ngOnInit(): void {
    this.title = 'Full Names';
  }
}
