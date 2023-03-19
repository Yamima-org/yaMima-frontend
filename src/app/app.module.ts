import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { AppComponent } from './app.component';
import { ProduitServiceService } from './business/administration/product/produit-service.service';
import { LayoutComponent } from './business/shared/layout/layout.component';
import { ToastModule } from 'primeng/toast';
import { MaterialModule } from './modules/shared-modules/angularMateial.module';
import { PrimeNgModule } from './modules/shared-modules/PrimeNgModule';
import { ChoixProduitComponent } from './choix-produit/choix-produit.component';
import { RoutingModule } from './modules/routing-modules/routing-module';
import { ListProduitComponent } from './business/administration/product/list-produit.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { HeaderComponent } from './business/shared/header/header.component';
import { SharedModule } from './modules/shared-modules/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './business/shared/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ChoixProduitComponent,
    ListProduitComponent,
    HeaderComponent,
    MapComponentComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    ToastModule,
    SharedModule
  ],
  providers: [Dialog ,DialogService ,MessageService ,ProduitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
