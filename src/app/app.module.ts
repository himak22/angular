import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HolaMundo2Component } from './hola-mundo2/hola-mundo2.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundo2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
