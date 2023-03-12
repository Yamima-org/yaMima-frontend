import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitServiceService } from '../business/administration/product/produit-service.service';
import { Product } from '../business/models/product';

@Component({
  selector: 'app-choix-produit',
  templateUrl: './choix-produit.component.html',
  styleUrls: ['./choix-produit.component.scss']
})
export class ChoixProduitComponent implements OnInit {
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
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
quantity: number = 1;
  constructor(private produitService : ProduitServiceService , private router: Router) { }

  ngOnInit(): void {

    this.AfficherListProduct();
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
      this.router.navigate(['/panier']);

    }
    quantitemoin() {
      if (this.quantity > 1) {
        this.quantity--;
      }    }

      quantitePlus() {
      this.quantity++;    }


}
