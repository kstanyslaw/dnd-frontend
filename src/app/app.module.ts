import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DndComponent } from './dnd/dnd.component';
import { DndDirective } from './dnd/directive/dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    DndComponent,
    DndDirective
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
