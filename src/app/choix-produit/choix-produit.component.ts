import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { ProduitServiceService } from '../business/administration/product/produit-service.service';
import { Product } from '../business/models/product';
import { PanierServiceService } from '../panier-service.service';

@Component({
  selector: 'app-choix-produit',
  templateUrl: './choix-produit.component.html',
  styleUrls: ['./choix-produit.component.scss']
})
export class ChoixProduitComponent implements OnInit {

/**
 * dataview
 */
    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;

    searchField:string;

  phoneNumber: string;
  deliveryAddress: string;
  paymentMethod: string;
  paymentMethods = ['Option 1', 'Option 2'];
  selectedValue: any ;
  display: boolean = false ;
  selectedSize = [
    { label: 'Small', value: 'S' },
    { label: 'Medium', value: 'M' },
    { label: 'Large', value: 'L' }
  ];
  imagePath = './assets/images/bolonaise.jpg'
  listProduct: Product[];
  sizeProduct : any ;
  quantity: number = 1;
  montantTotal : number ; 
  tailleProduit : string ; 
test : any ; 

  constructor(private produitService : ProduitServiceService , private router: Router ,private panierService :PanierServiceService) { 
  this.montantTotal = 0;

  }

  @ViewChild('dv') dv: DataView | undefined;

  ngOnInit(): void {
    this.AfficherListProduct();
  }

  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

applyFilter($event:any, stringVal:any) {
  this.dv!.filter(($event.target as HTMLInputElement).value, 'contains');
}
  AfficherListProduct(): void {
    this.produitService.getProductService().subscribe((product:any) => {
      this.listProduct = product

      console.log(this.listProduct)
    })

    }
    showBasicDialog(){
      this.display = true;

    }
    closeDialog(){}
    ajouterAuPanier(){
    this.sizeProduit()
      this.router.navigate(['/service/commande/panier']);

    }
    quantitemoin() : any {
      if (this.quantity > 1) {
        this.quantity--;
        if (this.selectedValue === 'S') {
          this.montantTotal = 20 * this.quantity;
        } else if (this.selectedValue === 'M') {
          this.montantTotal = 40 * this.quantity ;
        } else if (this.selectedValue === 'L') {
          this.montantTotal = 60 * this.quantity ;
        }
        console.log(this.montantTotal)
        this.panierService.montantTotal = this.montantTotal;
        this.panierService.quantite = this.quantity;
      return this.montantTotal 
      }    }

      quantitePlus() : any{

      this.quantity++;  
      if (this.selectedValue === 'S') {
        this.montantTotal = 20 * this.quantity;
      } else if (this.selectedValue === 'M') {
        this.montantTotal = 40 * this.quantity ;
      } else if (this.selectedValue === 'L') {
        this.montantTotal = 60 * this.quantity ;
      }
      console.log(this.montantTotal)
      this.panierService.montantTotal = this.montantTotal;
      this.panierService.quantite = this.quantity;
    return this.montantTotal 
    }


sizeProduit( ){
   this.panierService.SizeProd(this.selectedValue)
}

     
}
