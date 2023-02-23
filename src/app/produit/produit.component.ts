import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { SizeProduct } from '../models/sizeProduct';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 listProduct : Product[] = [];
  public produit :Product = new Product();
  display : boolean ;
  displayBasic : boolean = false ;
  displayBasic3 : boolean = false;
  selectedProduct: Product = new Product();
  selectedSize = [
    { label: 'Small', value: 'S' },
    { label: 'Medium', value: 'M' },
    { label: 'Large', value: 'L' }
  ];
  selectedValue: any;
  textValue : string ;
  checked: boolean = false ;

  constructor(private httpClient : HttpClient) {

  }

  ngOnInit(): void {
    this.AfficherListProduct() ;
  }


  showBasicDialog() {
    this.display = true;
}
  showBasicDialog2(produit:Product){
   this.displayBasic = true ;
   this.selectedProduct =produit ;

  }
  showBasicDialog3(produit:Product){
    this.displayBasic3 = true ;
    this.selectedProduct =produit ;
   console.log(this.selectedProduct) ;
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


ajouterOumodifierProduit(produit: Product){
 let url ="http://localhost:8080/ajouterProduct"
  this.httpClient.post(url ,produit).toPromise().then((data : any)=>{
 this.statutProd(this.produit);
 this.SizeProd(this.produit);
    this.AfficherListProduct();
    console.log(data)
  })
}

statutProd(produit : Product){
  if (this.checked== true){
    this.produit.statut = "Available"
  }
  else {
    this.produit.statut ="NotEvailable"
  }
}

SizeProd(produit : Product){
  if (this.selectedValue == "S"){
    this.produit.sizeproduct = "Small"
  }
  else if (this.selectedValue == "M"){
  this.produit.sizeproduct = "Medium"
}
else {
  this.produit.sizeproduct = "Large"
}
}

supprimerProduit(){
  let url ="http://localhost:8080/supprimerProduct"
  this.httpClient.post(url ,this.selectedProduct ).toPromise().then((data : any)=>{
    console.log(data)
    this.AfficherListProduct() ;
  })
}



}
