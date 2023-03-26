import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
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

  searchField: string;

  categories: any[] = [
    { name: 'Plat', code: 'PL' },
    { name: 'Dessert', code: 'DS' },
    { name: 'Boisson', code: 'BS' },
  ];

  selectedCategories: any[];

  phoneNumber: string;
  deliveryAddress: string;
  paymentMethod: string;
  paymentMethods = ['Option 1', 'Option 2'];
  selectedValue: any;
  display: boolean = false;
  selectedSize = [
    { label: 'Small', value: 'S' },
    { label: 'Medium', value: 'M' },
    { label: 'Large', value: 'L' }
  ];

  imagePath = './assets/images/bolonaise.jpg'
  listProduct: Product[];
  displayList: Product[];
  sizeProduct: any;
  quantity: number = 1;
  montantTotal: number;
  tailleProduit: string;
  test: any;
  listProduitSelectionner : any[ ] = [] ;
  produit : any ;
  nomProduit : string ;
  produitSelectionne : any = {} ;
  static readonly Q_MOIN : string = "Q_MOIN" ; 
  static readonly Q_PLUS : string = "Q_PLUS" ; 

@ViewChild('myDialog') myDialog: Dialog;

constructor(private primengConfig: PrimeNGConfig, private produitService : ProduitServiceService , private router: Router ,private panierService :PanierServiceService , private messageService : MessageService) {
    this.montantTotal = 0; this.quantity = 0 ;
  }

  @ViewChild('dv') dv: DataView | undefined;

  ngOnInit(): void {
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.primengConfig.ripple = true;
    this.AfficherListProduct();
  }


  showMessage(severity: string, summary: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      life: 3000,
    });
  }
  onSortChange(event: any) {
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


  filterProducts() {
    let stringCategories: string[] = this.selectedCategories.map(cat => cat.name);
    if (!stringCategories || stringCategories.length === 0) {
      this.displayList = this.listProduct;
    }
    else {
      this.displayList = this.listProduct.filter(p => stringCategories.includes(p.category));
    }
  }

  applyFilter($event: any) {
    this.dv!.filter(($event.target as HTMLInputElement).value, 'contains');
  }
  AfficherListProduct(): void {
    this.produitService.getProductService().subscribe((product: any) => {
      this.listProduct = product
      this.displayList = this.listProduct;
    })

  }
    showBasicDialog(produit : any ){
      this.produitSelectionne = produit ; 
      this.selectedValue = null ; 
      this.montantTotal = 0 ;
      this.quantity = 0 ;
    this.display = true;
    }
    closeDialog(){
      this.myDialog.close(new Event(''));

  }
    ajouterAuPanier( ){

    let prixTotal = this.montantTotal;
    let quantite = this.quantity
   let produitSelectionne = { tailleproduit : this.selectedValue.value, prixproduit : prixTotal , nomproduit : this.produitSelectionne.nameproduct  , quantite : quantite};
    this.listProduitSelectionner.push(produitSelectionne);
    this.panierService.listProduitSelectionnee = this.listProduitSelectionner ;
    this.showMessage('success','vous allez trouver vos commande dans le Panier');
    this.AfficherListProduct() ;
    this.closeDialog() ;
      // this.router.navigate(['/service/commande/panier']);

  }
 
  

    
  onChangeQuantite(quantite : string ) {
    if(quantite == "Q_MOIN"){
        this.quantity--;
        }
        else if (quantite == "Q_PLUS"){
          this.quantity++;
        }
        this.calculeMontant();

    }
  private calculeMontant() {
    if (this.selectedValue.value === 'S') {
      this.montantTotal = this.produitSelectionne.price * 1.2 * this.quantity;
    } else if (this.selectedValue.value === 'M') {
      this.montantTotal = this.produitSelectionne.price * 1.4 * this.quantity;
    } else if (this.selectedValue.value === 'L') {
      this.montantTotal = this.produitSelectionne.price * 1.6 * this.quantity;
    }
    this.panierService.montanttotal = this.montantTotal;
    this.panierService.quantite = this.quantity;
  }



  sizeProduit() {
    this.panierService.SizeProd(this.selectedValue)
  }


}
