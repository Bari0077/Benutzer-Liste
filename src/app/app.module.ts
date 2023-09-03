import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';    //import Material Cardview from Angualar Material 

@NgModule({
  declarations: [
    AppComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule     
  ],
  exports: [   
  
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
