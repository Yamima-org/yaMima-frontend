import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeRoutingModule } from './commande-routing.module';
import { SharedModule } from 'src/app/modules/shared-modules/shared.module';
import { PanierComponent } from './panier/panier.component';



@NgModule({
  declarations: [PanierComponent],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    SharedModule
  ]
})
export class CommandeModule { }
