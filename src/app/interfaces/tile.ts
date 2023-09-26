import { IHabitEvent } from "./habit-event";

export interface Tile {
  id: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
  textColor: string;
  data?: IHabitEvent;
  today?: boolean;
  border?: boolean;
}
