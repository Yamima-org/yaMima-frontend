import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { Panier } from '../business/models/panier';
import { Product } from '../business/models/product';
import { ChoixProduitComponent } from '../choix-produit/choix-produit.component';
import { PanierServiceService } from '../panier-service.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  paymentMethods = [ { label: 'Ticket Resteau', value: 'T' },    { label: 'Espéce', value: 'E' }  ];
  price: any;
  size: any;
  selectedValuepayement : any ;
  @ViewChild('ChoixProduitComponent') choixProduit: ChoixProduitComponent;
  @ViewChild('myDialog') myDialog: Dialog;
panier : Panier = new Panier ; 
tailleProduit : any ; 
  constructor(private panierService :PanierServiceService ,private messageService: MessageService) { }

  ngOnInit(): void {
    this.recupererPrixTotal();
this.sizeProd() ; 
  }
  onSubmit(){}

  ngAfterViewInit(): void {
  }

  recupererPrixTotal():void  {
    this.panier.montanttotal = this.panierService.montantTotal;
  }

  sizeProd(){
    this.panier.tailleproduit = this.panierService.tailleProduit ; 
    console.log(this.tailleProduit)

  }
  closeDialog() {
    this.myDialog.close(new Event(''));
  }

  modePaiement(panier: Panier) {
    if (this.selectedValuepayement == "T") {
      panier.paiementmode = "T"
    }
    else  {
      panier.paiementmode = "E"
    }
   
  }
  showMessage(severity: string, summary: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      life: 3000,
    });
  }

  
  sauvegarderCommande(panier : Panier){
    this.recupererPrixTotal() ; 
    this.sizeProd() ; 
    this.modePaiement(panier);
    this.panierService.passerCommande(this.panier).subscribe(
      (response)=>{
      this.showMessage('success', 'Commande Sauvegardée avec succée');
      location.reload();
    },
    (error) => {
      this.showMessage('error', 'Sauvegard  du produit échouée');
    }
  );
  }
}
