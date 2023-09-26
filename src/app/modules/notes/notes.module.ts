import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './components/note/note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { MaterialGeneralModule } from '../material/material.module';

@NgModule({
  declarations: [
    NoteComponent,
    NoteListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialGeneralModule
  ],
  exports: [
    NoteListComponent,
  ]
})
export class NotesModule { }
