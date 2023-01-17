import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProduitComponent } from "src/app/produit/produit.component";




const appRoutes : Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
 {path: 'produit' , component: ProduitComponent},

  
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
  