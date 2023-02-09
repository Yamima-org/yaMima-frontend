import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
interface People {
  firstname?: string;
  lastname?: string;
  age?: string;
}
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 listProduct : Product[] = [];
tableData:  People[] = [];
    cols: any[] = [];
  
  constructor(private httpClient : HttpClient) {
  }

  ngOnInit(): void {
    this.AfficherListProduct() ;
    this.cols = [
      {
          field: 'nameProduct',
          header: 'Nom Prodduit'
      },
      {
          field: 'ingredients',
          header: 'Ingredients'
      },
      {
          field: 'price',
          header: 'Prix'
      },
      {
          field: 'statut',
          header: 'Statut'
      },
      {
          field: 'sizeProduct',
          header: 'Taille Produit'
      },
      {
          field: 'description',
           header: 'Description'
      },
  ];
  this.tableData = [
    {
        firstname: 'David',
        lastname: 'ace',
        age: '40',
    },
    {
        firstname: 'AJne',
        lastname: 'west',
        age: '40',
    },
    {
        firstname: 'Mak',
        lastname: 'Lame',
        age: '40',
    },
    {
        firstname: 'Peter',
        lastname: 'raw',
        age: '40',
  },]
  }

  



public getProduct(): Observable<Product[]> {
  const url = 'http://localhost:8080/getProduct';
  return this.httpClient.get<Product[]>(url);
}

AfficherListProduct(): void {
  this.getProduct().subscribe(product=>{
    this.listProduct = product
  console.log(this.listProduct);
    
  })
}
}
