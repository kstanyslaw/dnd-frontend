import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DndComponent } from './dnd/dnd.component';


const routes: Routes = [
  {path: 'dnd', component: DndComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
