import { IHabit } from "./habit";
import { IHabitEvent } from "./habit-event";

export interface IHabitRow {
  date: Date;
  habit: IHabit;
  events: IHabitEvent[];
}
