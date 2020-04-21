import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArrayFromComponent } from './Array/array-from/array-from.component';
import { ArrayIsArrayComponent } from './Array/array-is-array/array-is-array.component';

const routes: Routes = [
  { path: 'Array/From', component: ArrayFromComponent },
  { path: 'Array/IsArray', component: ArrayIsArrayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
