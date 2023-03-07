import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from 'src/app/layout/layout.component';
import { ProduitComponent } from "src/app/produit/produit.component";




const appRoutes : Routes = [
// { path: '', redirectTo: '', pathMatch: 'full' },
 {path: 'produit' , component: ProduitComponent},
 {path: 'layout' , component: LayoutComponent}
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
