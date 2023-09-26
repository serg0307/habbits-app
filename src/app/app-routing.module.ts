import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './modules/calendar/components/grid/grid.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {path: '', component: GridComponent},
  {path: 'grid/:year/:month', component: GridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
