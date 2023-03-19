import { NgModule } from '@angular/core';
import { PanierComponent } from './panier/panier.component';
import { SharedModule } from 'src/app/modules/shared-modules/shared.module';
import { CommonModule } from '@angular/common';
import { CommandeRoutingModule } from './commande-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    SharedModule
  ]
})
export class CommandeModule { }
