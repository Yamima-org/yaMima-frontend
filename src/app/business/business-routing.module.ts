import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './commandes/panier/panier.component';

const routes : Routes = [
  { path: 'commande', loadChildren: () => import('./commandes/commande.module')
  .then(m => m.CommandeModule)}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
