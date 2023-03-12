import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Dialog } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { FormControl, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ProduitServiceService } from './produit-service.service';
import { Image } from '../../models/image';


@Component({
  selector: 'app-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {

  listProduct: Product[] = [];
  public produit: Product = new Product();
  display: boolean;
  displayBasic: boolean = false;
  displayBasic3: Boolean = false;
  selectedProduct: Product = new Product();

  selectedSize = [
    { label: 'Small', value: 'S' },
    { label: 'Medium', value: 'M' },
    { label: 'Large', value: 'L' }
  ];

  selectedValue: any;
  textValue: string;
  checked: boolean = true ;

  @ViewChild('myDialog') myDialog: Dialog;
  @ViewChild('myDialog') myDialog2: Dialog;
  @ViewChild('myDialog') myDialog3: Dialog;

  nomProduit = new FormControl('', Validators.required);
  prix = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  size = new FormControl('', Validators.required);
  statut = new FormControl('', Validators.required);
  ingredients = new FormControl('', Validators.required);


  constructor(private httpClient: HttpClient, private produitService: ProduitServiceService, private dialogService: DialogService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.AfficherListProduct();


  }

  showBasicDialog() {
      this.display = true;
      this.prix.setValue('');
      this.size.setValue('');
      this.statut.setValue('');
      this.description.setValue('');
     this.ingredients.setValue('');
     this.nomProduit.setValue('');

  }

  showBasicDialog2(produit: Product) {
    this.displayBasic = true;
    this.selectedProduct = produit;

  }

  showBasicDialog3(produit: Product) {
    this.displayBasic3 = true;
    this.selectedProduct = produit;
    console.log(this.selectedProduct);
  }

  AfficherListProduct(): void {
    this.produitService.getProductService().subscribe(product => {
      this.listProduct = product

      console.log(this.listProduct)
    })

  }

  statutProd(produit: Product) {
    if (this.checked == true) {
      produit.statut = true;
    }
    else {
      produit.statut = false;
    }
  }

  SizeProd(produit: Product) {
    if (this.selectedValue == "L") {
      produit.sizeproduct = "L"
    }
    else if (this.selectedValue == "M") {
      produit.sizeproduct = "M"
    }
    else {
      produit.sizeproduct = "S"
    }
  }

  closeDialog() {
    this.myDialog.close(new Event(''));
  }

  closeDialog2() {
    this.displayBasic3 = false;

    this.myDialog2.close(new Event(''));
  }
  closeDialog3() {
    this.displayBasic = false;
    this.myDialog3.close(new Event(''));
  }

  showMessage(severity: string, summary: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      life: 3000,
    });
  }



  modidfierProduit(produit: Product) {
    let images: Image[] = [];
    this.selectedProduct.images = images
    this.produitService.ajouterOumodifierProduitService(produit).subscribe((Response) => {
      this.showMessage('success', 'Produit Modifié avec succés');
      this.closeDialog2();
      this.AfficherListProduct();
    },
      (error) => {
        this.showMessage('error', 'Modification du produit échouée');
      }
    );
  }

  ajouterOumodifierProduit(produit: Product) {
    let images: Image[] = [];
    this.produit.images = images
    this.statutProd(produit);
    this.SizeProd(produit);
    this.produitService.ajouterOumodifierProduitService(produit).subscribe(
      (response) => {
        this.showMessage('success', 'Produit enregistré avec succés');
        this.closeDialog();
        this.AfficherListProduct();

      },
      (error) => {
        this.showMessage('error', 'Ajout du produit échouée');
      }
    );
  }

  supprimerProduit(abc: Product) {
    this.produitService.supprimerProduitService(abc).subscribe(
      (response) => {
        this.showMessage('success', 'Produit supprimé avec succès');
        this.closeDialog3();
        this.AfficherListProduct();

      },
      (error) => {
        this.showMessage('error', 'Suppression du produit échouée');
      }
    );

  }
}


