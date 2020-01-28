import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
