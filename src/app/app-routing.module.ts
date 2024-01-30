import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetalhesComponent } from './components/item-detalhes/item-detalhes.component';

const routes: Routes = [
  {path: 'item/:id', component: ItemDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
