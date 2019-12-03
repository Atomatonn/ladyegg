import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LadysLairComponent } from './ladys-lair/ladys-lair.component';
import { StarWarsRipoffComponent } from './star-wars-ripoff/star-wars-ripoff.component';


const routes: Routes = [
  { path: '', redirectTo: '/beginning', pathMatch: 'full' },
  {
    path: 'beginning',
    component: StarWarsRipoffComponent
  },
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
