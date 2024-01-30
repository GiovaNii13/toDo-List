import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListasComponent } from './components/listas/listas.component';
import { ListasService } from './services/listas.service';
import { ItemDetalhesComponent } from './components/item-detalhes/item-detalhes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListasComponent,
    ItemDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
