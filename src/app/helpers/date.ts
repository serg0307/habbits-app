import { IHabitEvent } from "../interfaces/habit-event";

export class DateFunctions {
  static getMonthArray(month: number, year: number): string[]{

    var date = new Date(year, month-1, 1);
    const result = [];
    while (date.getMonth() === month-1) {
      const day = new Date(date);
      result.push(day.getDate().toString());
      date.setDate(date.getDate() + 1);
    }
    return result;
  }
  static getFirstDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }
}
