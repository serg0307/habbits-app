import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { INote } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';
import { AddNoteComponent } from 'src/app/shared/dialog/add-note/add-note.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {
  notes: INote[] = [];
  constructor(
    private noteService: NoteService,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.notes = this.noteService.getAllNotes();
  }
  delete(item: INote): void {
    this.notes = this.notes.filter((el) => el.id !== item.id);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddNoteComponent, {
      data: {},
      width: '600px',

    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.notes.push(result);
      }

    });
  }
}
