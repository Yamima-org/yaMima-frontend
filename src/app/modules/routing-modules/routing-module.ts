import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListProduitComponent } from 'src/app/business/administration/product/list-produit.component';
import { LayoutComponent } from 'src/app/business/shared/layout/layout.component';




const appRoutes : Routes = [
// { path: '', redirectTo: '', pathMatch: 'full' },
 {path: 'produit' , component: ListProduitComponent},
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
