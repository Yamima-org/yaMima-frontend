import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListProduitComponent } from 'src/app/business/administration/product/list-produit.component';
import { LayoutComponent } from 'src/app/business/shared/layout/layout.component';
import { ChoixProduitComponent } from "src/app/choix-produit/choix-produit.component";




const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LayoutComponent },
  { path: 'produit', component: ListProduitComponent },
  { path: 'choixProduit', component: ChoixProduitComponent },
  { path: 'service', loadChildren: () => import('../../business/business.module')
        .then(m => m.BusinessModule) },
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ useHash: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
