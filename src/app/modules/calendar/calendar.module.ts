import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './components/grid/grid.component';
import { PeriodComponent } from './components/period/period.component';
import { NotesModule } from '../notes/notes.module';

import { MaterialGeneralModule } from '../material/material.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    GridComponent,
    PeriodComponent,
  ],
  imports: [
    CommonModule,
    NotesModule,
    MatGridListModule,
    MaterialGeneralModule
  ]
})
export class CalendarModule { }
