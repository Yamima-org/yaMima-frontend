import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  apiUrl = "http://localhost:8080/" ; 

  constructor(private httpClient : HttpClient) { }




   getProductService(): Observable<Product[]> {
    const url = this.apiUrl + 'getProduct';
    return this.httpClient.get<Product[]>(url);
  }


   ajouterOumodifierProduitService(produit: Product): Observable<Product>{
    const url = this.apiUrl + 'ajouterProduct';
   return this.httpClient.post<Product>(url ,produit) ; 
  }

  supprimerProduitService(selectedProduct:Product): Observable<Product>{
    const url = this.apiUrl + 'supprimerProduct';
   return this.httpClient.post<Product>(url ,selectedProduct )
  }




}
