import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListasComponent } from './components/listas/listas.component';
import { ListasService } from './services/listas.service';

@NgModule({
  declarations: [
    AppComponent,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
