import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { AppComponent } from './app.component';
import { ListProduitComponent } from './business/administration/product/list-produit.component';
import { ProduitServiceService } from './business/administration/product/produit-service.service';
import { HeaderComponent } from './business/shared/header/header.component';
import { LayoutComponent } from './business/shared/layout/layout.component';
import { ToastModule } from 'primeng/toast';
import { RoutingModule } from './modules/routing-modules/routing-module';
import { MaterialModule } from './modules/shared-modules/angularMateial.module';
import { PrimeNgModule } from './modules/shared-modules/PrimeNgModule';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponent,
    LayoutComponent,
    HeaderComponent ,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    PrimeNgModule,
    ToastModule,
  ],
  providers: [Dialog ,DialogService ,MessageService ,ProduitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
