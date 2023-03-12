import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListProduitComponent } from 'src/app/business/administration/product/list-produit.component';
import { LayoutComponent } from 'src/app/business/shared/layout/layout.component';
import { ChoixProduitComponent } from "src/app/choix-produit/choix-produit.component";
import { PanierComponent } from "src/app/panier/panier.component";




const appRoutes : Routes = [
// { path: '', redirectTo: '', pathMatch: 'full' },
 {path: 'produit' , component: ListProduitComponent},
 {path: 'layout' , component: LayoutComponent},
 {path: 'choixProduit' , component: ChoixProduitComponent },
 {path: 'panier' , component: PanierComponent },
]
@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes),
      CommonModule
    ],
    exports: [RouterModule],
    declarations: []
  })
  export class RoutingModule {  }
