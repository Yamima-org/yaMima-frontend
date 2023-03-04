import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { Image } from '../models/image';
import { ProduitServiceService } from '../produit-service.service';
import { DialogService } from 'primeng/dynamicdialog';
import { Dialog } from 'primeng/dialog';
import { Message, MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  displayBasic3 :Boolean = false;
  selectedProduct: Product = new Product();
  selectedSize = [
    { label: 'Small', value: 'S' },
    { label: 'Medium', value: 'M' },
    { label: 'Large', value: 'L' }
  ];
  selectedValue: any ;
  checked: boolean = false ;
  @ViewChild('myDialog') myDialog: Dialog;
  

  constructor(private httpClient : HttpClient , private produitService : ProduitServiceService ,private dialogService: DialogService,
    private messageService: MessageService
    ) {
  
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




AfficherListProduct(): void {
this.produitService.getProductService().subscribe(product => {
  this.listProduct = product

  console.log(this.listProduct)
})

}



statutProd(produit : Product){
  if (this.checked== true){
    produit.statut = true ; 
  }
  else {
    produit.statut = false ; 
  }
}

SizeProd(produit : Product){
  if (this.selectedValue == "L"){
    produit.sizeproduct = "L"
  }
  else if (this.selectedValue == "M"){
  produit.sizeproduct = "M"
}
else {
  produit.sizeproduct = "S"
}
}

closeDialog() {
  this.myDialog.close(new Event(''));
}
 

showMessage(severity: string, summary: string) {
  this.messageService.add({
    severity: severity,
    summary: summary,
    life: 3000,
  });
}



modidfierProduit(){

}



ajouterOumodifierProduit(produit: Product){

  let images :Image[] = [] ;
  this.produit.images = images
   this.statutProd(produit);
  this.SizeProd(produit);
this.produitService.ajouterOumodifierProduitService(produit).subscribe(
  (response) => {
    this.showMessage('success', 'Produit enregistré avec succés');
  },
  (error) => {
    this.showMessage('error', 'Ajout du produit échouée');
  }
);
this.closeDialog();
this.AfficherListProduct();

}

supprimerProduit(abc:Product){
 this.produitService.supprimerProduitService(abc).subscribe(
  (response)=> {
    this.showMessage('success' , 'Produit supprimé avec succès');
  },
  (error)=>{
    this.showMessage('error' , 'Suppression du produit échouée');
  }
 ) ; 
 this.closeDialog();
 this.AfficherListProduct() ; 



}




}


