
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { BaseColors, GridColors } from 'src/app/helpers/colors';
import { DateFunctions } from 'src/app/helpers/date';
import { IHabit } from 'src/app/interfaces/habit';
import { IHabitEvent } from 'src/app/interfaces/habit-event';
import { Tile } from 'src/app/interfaces/tile';
import { HabitService } from 'src/app/services/habit.service';
import { AddHabitComponent } from 'src/app/shared/dialog/add-habit/add-habit.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() year: number = 0;
  @Input() month: number = 0;
  tiles: Tile[] = [];
  habits: IHabit[] = [];
  events: IHabitEvent[] = [];
  showPeriod = false;
  constructor(
    private habitService: HabitService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (!this.year) {
      const date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      this.fill();
    } else {

      this.route.params.subscribe(val => {
        this.year = this.route.snapshot.params['year'];
        this.month = this.route.snapshot.params['month'];
        this.fill();
      });

    }

  };

  fill() {
    this.tiles = [];

    this.habits = this.habitService.getHabits();
    this.buildHeader();
    const inputDate = new Date(this.year, this.month - 1, 1);
    this.habits.forEach(habit => {
      if (habit) {
        const events = this.habitService.getHabitEvents(habit, inputDate);
        this.events = this.events.concat(events);
        this.buildRow(habit, events);
      }
    });

  }
  click(tile: Tile): void {
    if (!tile.data) return;
    else {
      tile.data.id = Math.round(Math.random() * 10000);
      tile.data.value = !tile.data.value;
      const habit = this.getHabitById(tile.data?.habitId);
      tile.text = tile.data.value ? "+" : "";
      tile.color = tile.data.value ? habit.colorCode : GridColors.primary.content.background;
      tile.textColor = GridColors.primary.content.text;
      this.updateTotal(tile.data);
    }
  }
  updateTotal(event: IHabitEvent): void {
    const tile = this.getTileById('achieved-' + event.habitId);
    let newText = 0;
    if (event.value) {
      newText = +tile.text + 1;
      tile.text = newText.toString();
      this.events.push(event);
    } else {
      newText = +tile.text - 1;
      tile.text = newText.toString();
      this.events = this.events.filter((ev) => ev.id !== event.id);
    }
    const habit = this.getHabitById(event.habitId);
    const events = this.getEventsByHabitId(event.habitId);
    tile.color = this.tileHighlight(habit.goal, events.length);
  }
  getEventsByHabitId(id: number): IHabitEvent[] {
    return <IHabitEvent[]>this.events.filter((el) => el.habitId === id);
  }
  getHabitById(id: number): IHabit {
    return <IHabit>this.habits.find(el => el.id === id);
  }
  buildRow(habit: IHabit, events: IHabitEvent[]) {
    this.tiles.push(
      {
        id: "title" + habit.id,
        text: habit.title,
        cols: 5,
        rows: 1,
        color: habit.colorCode,
        textColor: GridColors.primary.header.text,
        border: true
      },
    );
    for (let index = 0; index < 31; index++) {
      let element = events.find(el => el.date.getDate() === index + 1);
      if (!element) {
        element = {
          habitId: habit.id,
          date: new Date(this.year, this.month - 1, index + 1),
          value: false
        };
      }
      const tile = {
        id: 'habit-' + habit.id + '-day-' + (index + 1),
        text: element.value ? `<mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="home"></mat-icon>` : "",
        cols: 1,
        rows: 1,
        color: element.value ? habit.colorCode : GridColors.primary.content.background,
        textColor: GridColors.primary.content.text,
        data: element,
        border: element.date.toDateString() == new Date().toDateString(),
        today: element.date.toDateString() == new Date().toDateString(),
      }

      this.tiles.push(tile);
    }
    this.tiles.push(
      {
        id: 'goal-' + habit.id,
        text: habit.goal.toString(),
        cols: 2,
        rows: 1,
        color: habit.colorCode,
        textColor: GridColors.primary.content.text,
        border: true
      },
    );
    this.tiles.push(
      {
        id: 'achieved-' + habit.id,
        text: events.length.toString(),
        cols: 2,
        rows: 1,
        color: this.tileHighlight(habit.goal, events.length),
        textColor: GridColors.primary.content.text,
        border: true
      },
    );
  }
  tileHighlight(goal: number, events: number): string {
    let color = GridColors.highlights.ok;
    const diff = goal - events;
    if (diff > 5) {
      color = GridColors.highlights.alert;
    } else if (diff > 0) {
      color = GridColors.highlights.warning;
    }
    return color;
  }
  getTileById(id: string): Tile {
    const result = this.tiles.find(el => el.id === id);
    if (result) {
      return result;
    } else {
      throw new Error('unknown error. should never happen!');
    }
  }

  buildHeader() {
    const days = DateFunctions.getMonthArray(this.month, this.year);
    this.tiles.push(
      {
        id: '',
        text: 'Habit',
        cols: 5, rows: 2,
        color: BaseColors.white,
        textColor: GridColors.primary.header.text,
        border: true
      },
    );


    for (let index = 0; index < 31; index++) {
      const date = new Date(this.year, this.month - 1, index + 1);
      const today = new Date(this.year, this.month - 1, index + 1).toDateString() == new Date().toDateString();

      const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      this.tiles.push(
        {
          id: 'header-weekday-' + (index + 1),
          text: week[date.getDay()],
          cols: 1,
          rows: 1,
          color: GridColors.secondary.header.background,
          textColor: GridColors.secondary.header.text,
          data: {
            date: new Date(this.year, this.month - 1, index + 1),
            value: false,
            habitId: 0
          },
          border: today,
          today: today
        },
      );
    }

    this.tiles.push(
      {
        id: 'goal',
        text: 'Goal',
        cols: 2, rows: 2,
        color: BaseColors.white,
        textColor: GridColors.primary.header.text
      },
    );
    this.tiles.push(
      { id: 'achieved', text: 'Achieved', cols: 2, rows: 2, color: BaseColors.white, textColor: GridColors.primary.header.text },
    );
    for (let index = 0; index < 31; index++) {
      const element = days[index];
      const today = new Date(this.year, this.month - 1, index + 1).toDateString() == new Date().toDateString();
      this.tiles.push(
        {
          id: 'header-day-' + (index + 1),
          text: element ? element : '',
          cols: 1,
          rows: 1,
          color: GridColors.secondary.header.background,
          textColor: GridColors.secondary.header.text,
          data: {
            date: new Date(this.year, this.month - 1, index + 1),
            value: false,
            habitId: 0
          },
          border: today,
          today: today
        },
      );
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddHabitComponent, {
      data: {},
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.habits.push(result);
        this.buildRow(result, []);
      }
    });
  }
}
