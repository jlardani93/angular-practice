import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Move around a 12x12 grid,
// Pickup items,
// See score increase
//
// Todo:
// Generate 12x12 grid,
// Random gen of apples
// Get player to move around
// Define apples and score value
//
// Player component - All things player related. //Movement, consume of items, etc.
// Grid component - Gen of grid and render process
//
