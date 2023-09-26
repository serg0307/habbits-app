import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

type MenuItem = {
  title: string;
  path: string[];
}

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  links: MenuItem[] = [
    { title: 'Home', path: ['/'] },

  ];
  constructor(private router: Router) { }
  ngOnInit(): void {
    const date = new Date();
    this.links.push({
      title: 'Demo',
      path: ['grid', date.getFullYear().toString(), (date.getMonth() + 1).toString()] })
  }
  click(item: MenuItem): void {
    this.router.navigate(item.path);
  }
}
