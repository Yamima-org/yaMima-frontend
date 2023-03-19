import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Panier } from './business/models/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {
  montantTotal: number;
  quantite: number;
  panier : Panier ; 
  tailleProduit : any ; 
  selectedValue : any ; 
  constructor(private httpClient : HttpClient) { }

   
  SizeProd( selectedValue : string ): any{
  if(selectedValue == 'S'){
    this.tailleProduit = 'S'
  }
  else if (selectedValue =='M'){
    this.tailleProduit = 'M'
  }
  else {
    this.tailleProduit = 'L'
  }

    return  this.tailleProduit
   console.log(this.tailleProduit)
   
  }


  passerCommande(panier : Panier):Observable<Panier>{
    const url = environment.url + 'sauvegarderPanier';
  return this.httpClient.post<Panier>(url ,panier) ;
  } ; 
  
}
