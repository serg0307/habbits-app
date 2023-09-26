import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IHabit } from 'src/app/interfaces/habit';

@Component({
  selector: 'app-add-habit',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    FormsModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './add-habit.component.html',
  styleUrls: ['./add-habit.component.scss']
})
export class AddHabitComponent {
  constructor(
    public dialogRef: MatDialogRef<AddHabitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHabit,
  ) { }
  ngOnInit(): void {
    this.data.colorCode = '#ace8d4';
    this.data.id = Math.round(Math.random() * 10000);
    this.data.goal = 0;
  }
  onNoClick(): void {

    this.dialogRef.close();
  }
}
