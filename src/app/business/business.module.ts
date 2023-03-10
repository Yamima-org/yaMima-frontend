import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreerproduitComponent } from './administration/product/creerproduit.component';
import { ListProduitComponent } from './administration/product/list-produit.component';
import { ProduitServiceService } from './administration/product/produit-service.service';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    CreerproduitComponent,
    ListProduitComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ProduitServiceService]
})
export class BusinessModule { }
