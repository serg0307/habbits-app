import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { GridComponent } from './components/grid/grid.component';
import { PeriodComponent } from './components/period/period.component';

import { NotesModule } from '../notes/notes.module';


@NgModule({
  declarations: [
    GridComponent,
    PeriodComponent,
  ],
  imports: [
    CommonModule,
    NotesModule,

    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CalendarModule { }
