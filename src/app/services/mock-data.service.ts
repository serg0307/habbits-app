import { Injectable } from '@angular/core';
import { IHabit } from '../interfaces/habit';
import { IHabitEvent } from '../interfaces/habit-event';
import { INote } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }
  getHabitList(): IHabit[] {
    return [
      {
        id: 1,

        title: 'Exercise',
        colorCode: 'yellow',
        goal: 10
      },
      {
        id: 2,

        title: 'Bathe & Moisturize',
        colorCode: 'pink',
        goal: 4
      },
      {
        id: 3,
        title: 'Journal',
        colorCode: 'cyan',
        goal: 8
      },
    ];
  }
  getHabitEventList(): IHabitEvent[] {
    var d = new Date();
    const result: IHabitEvent[] = [];
    for (let index = 0; index < 50; index++) {
      let text = 'some random excuse #' + index;
      const value = index % 2 == 0;
      if (value) {
        text = 'some random message #' + index;
      }
      if (Math.random() < 0.5) {
        text = '';
      }
      result.push(
        {
          id: index+1,
          habitId: index%3+1,
          date: new Date(d.setDate(d.getDate() - 1)),
          value: value,
          message: text,
        }
      )
    }
    return result;
  }

  getNoteList(): INote[] {
    var d = new Date();
    d.setDate(d.getDate() - 6);
    const result: INote[] = [];
    for (let index = 0; index < 5; index++) {
      result.push(
        {
          id: index+1,
          date: new Date(d.setDate(d.getDate() + 1)),
          message: 'some random note #' + index,
        }
      )
    }
    return result;
  }
}
