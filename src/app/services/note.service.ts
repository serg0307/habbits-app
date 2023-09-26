import { Injectable } from '@angular/core';
import { MockDataService } from './mock-data.service';
import { INote } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private mock: MockDataService) { }
  getAllNotes(): INote[] {
    return this.mock.getNoteList();
  }
}
