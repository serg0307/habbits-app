import { IHabit } from "./habit";

export interface IHabitEvent {
  id?: number;
  habitId: number;
  date: Date;
  value: boolean;
  message?: string;
}
