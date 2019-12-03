import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LadysLairComponent } from './ladys-lair/ladys-lair.component';
import { StarWarsRipoffComponent } from './star-wars-ripoff/star-wars-ripoff.component';

@NgModule({
  declarations: [
    AppComponent,
    LadysLairComponent,
    StarWarsRipoffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
