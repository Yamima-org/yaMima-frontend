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
import { ChoixProduitComponent } from './choix-produit/choix-produit.component';
import { RoutingModule } from './modules/routing-modules/routing-module';
import { ListProduitComponent } from './business/administration/product/list-produit.component';
import { MapComponentComponent } from './map-component/map-component.component';
import { HeaderComponent } from './business/shared/header/header.component';
import { SharedModule } from './modules/shared-modules/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './business/shared/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './business/shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ChoixProduitComponent,
    ListProduitComponent,
    HeaderComponent,
    FooterComponent,
    MapComponentComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RoutingModule,
    HttpClientModule,
    ToastModule,
    SharedModule,
    RouterModule
  ],
  providers: [Dialog ,DialogService ,MessageService ,ProduitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
