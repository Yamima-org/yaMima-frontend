import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/modules/angularMateial.module';
import { RoutingModule } from 'src/routing/routing-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from 'src/modules/PrimeNgModule';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    PrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
