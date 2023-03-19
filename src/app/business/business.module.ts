import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitServiceService } from './administration/product/produit-service.service';
import { ToastModule } from 'primeng/toast';
import { BusinessRoutingModule } from './business-routing.module';
import { CommandeModule } from './commandes/commande.module';
import { SharedModule } from '../modules/shared-modules/shared.module';
import { PanierComponent } from './commandes/panier/panier.component';



@NgModule({
  declarations: [
    PanierComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    ToastModule,
    CommandeModule,
    SharedModule
  ],
  providers: [ProduitServiceService]
})
export class BusinessModule { }
