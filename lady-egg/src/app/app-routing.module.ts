import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LadysLairComponent } from './ladys-lair/ladys-lair.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: LadysLairComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
