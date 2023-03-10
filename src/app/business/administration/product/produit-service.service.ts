import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  constructor(private httpClient : HttpClient) { }


   getProductService(): Observable<Product[]> {
    const url = environment.url + 'getProduct';
    return this.httpClient.get<Product[]>(url);
  }


   ajouterOumodifierProduitService(produit: Product): Observable<Product>{
    const url = environment.url + 'ajouterProduct';
   return this.httpClient.post<Product>(url ,produit) ;
  }

  supprimerProduitService(selectedProduct:Product): Observable<Product>{
    const url = environment.url + 'supprimerProduct';
   return this.httpClient.post<Product>(url ,selectedProduct )
  }




}
