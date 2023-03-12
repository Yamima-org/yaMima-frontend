import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChoixProduitComponent } from "src/app/choix-produit/choix-produit.component";
import { PanierComponent } from "src/app/panier/panier.component";
import { ProduitComponent } from "src/app/produit/produit.component";




const appRoutes : Routes = [
// { path: '', redirectTo: '', pathMatch: 'full' },
 {path: 'produit' , component: ProduitComponent},
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
  