import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProduitComponent } from './administration/product/list-produit.component';
import { ProduitServiceService } from './administration/product/produit-service.service';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { PrimeNgModule } from '../modules/shared-modules/PrimeNgModule';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { RoutingModule } from '../modules/routing-modules/routing-module';
import { MaterialModule } from '../modules/shared-modules/angularMateial.module';



@NgModule({
  declarations: [
    ListProduitComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    BrowserModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    ToastModule,
  ],
  providers: [ProduitServiceService]
})
export class BusinessModule { }
