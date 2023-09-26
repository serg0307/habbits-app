import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DateFunctions } from 'src/app/helpers/date';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent {
  @Input() year: number = 0;
  @Input() month: number = 0;
  date: Date = new Date();
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.date = DateFunctions.getFirstDayOfMonth( new Date(this.year, this.month, 0));
  }
  back(): void {
    const month = this.date.getMonth();
    this.date.setMonth(this.date.getMonth()-1);
    console.log(this.date);
    this.router.navigate(['grid', this.date.getFullYear(), this.date.getMonth()+1]);
  }
  forward(): void {
    const month = this.date.getMonth()+2;
    this.date.setMonth(this.date.getMonth() + 1);
    console.log(this.date, month, this.date.getFullYear());
    this.router.navigate(['grid', this.date.getFullYear(), this.date.getMonth() + 1]);

  }
}
