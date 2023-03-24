import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Panier } from './business/models/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {
  montanttotal: number;
  quantite: number;
  panier : Panier ; 
  tailleproduit : any ; 
  selectedValue : any ; 
  listProduitSelectionnee : any[]= [] ; 
  constructor(private httpClient : HttpClient) { }

   
  SizeProd( selectedValue : string ): any{
  if(selectedValue == 'S'){
    this.tailleproduit = 'S'
  }
  else if (selectedValue =='M'){
    this.tailleproduit = 'M'
  }
  else {
    this.tailleproduit = 'L'
  }

    return  this.tailleproduit
   console.log(this.tailleproduit)
   
  }









  passerCommande(panier : Panier):Observable<Panier>{
    const url = environment.url + 'sauvegarderPanier';
  return this.httpClient.post<Panier>(url ,panier) ;
  } ; 
  
}
