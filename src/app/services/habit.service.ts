import { Injectable } from '@angular/core';
import { IHabit } from '../interfaces/habit';
import { IHabitEvent } from '../interfaces/habit-event';
import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private mock: MockDataService) { }
  getHabitEvents(habit: IHabit, date: Date): IHabitEvent[] {
    let result = this.mock.getHabitEventList().filter(obj => {
      return obj.habitId === habit.id
        && obj.value === true
        && obj.date.getMonth() === date.getMonth()
        && obj.date.getFullYear() === date.getFullYear();
    });
    return result;
  }
  /**
   * get habit by id. for presentation purposes this will do.
   * @param {number} habitId
   * @returns {IHabit | undefined}
   */
  getHabitById(habitId: number): IHabit | undefined {
    let result = this.mock.getHabitList().filter(obj => {
      return obj.id === habitId
    }).pop();
    return result;
  }
  getHabits(): IHabit[]{
    return this.mock.getHabitList();
  }

}
