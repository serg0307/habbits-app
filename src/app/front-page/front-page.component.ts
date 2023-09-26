import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent {
  constructor(private router: Router) {}

  click() {
    const date = new Date();
    this.router.navigate(['grid', date.getFullYear(), date.getMonth()+1]);
  }
}
