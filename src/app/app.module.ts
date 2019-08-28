import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayFromComponent } from './Array/array-from/array-from.component';
import { ArrayIsArrayComponent } from './Array/array-is-array/array-is-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFromComponent,
    ArrayIsArrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
