import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/modules/angularMateial.module';
import { RoutingModule } from 'src/routing/routing-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from 'src/modules/PrimeNgModule';
import { CreerproduitComponent } from './creerproduit/creerproduit.component';
import { Dialog } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    CreerproduitComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    PrimeNgModule,
  ],
  providers: [Dialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
