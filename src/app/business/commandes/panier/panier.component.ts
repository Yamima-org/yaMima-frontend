import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { ChoixProduitComponent } from 'src/app/choix-produit/choix-produit.component';
import { PanierServiceService } from 'src/app/panier-service.service';
import { Commande } from '../../models/commande';
import { Panier } from '../../models/panier';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
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
listProduitSelectionne : any []=[]; 
montantTotal : any ; 
commande : Commande ;
  constructor(private panierService :PanierServiceService ,private messageService: MessageService) { }

  ngOnInit(): void {
// this.sizeProd() ; 
// this.quantiteProd()
this.montantTotal = this.calculerPrixTotal()
  }
  onSubmit(){}

  ngAfterViewInit(): void {
  }

 

  // sizeProd(){
  //   this.commande.tailleproduit = this.panierService.tailleproduit ; 
  //   console.log(this.tailleProduit)

  // }


  // quantiteProd(){
  // this.commande.quantite = this.panierService.quantite ; 
  // }

  closeDialog() {
    this.myDialog.close(new Event(''));
  }

  modePaiement(panier: Panier) {
    if (this.selectedValuepayement == "T") {
      panier.modepaiement = "T"
    }
    else  {
      panier.modepaiement = "E"
    }
   
  }
  showMessage(severity: string, summary: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      life: 3000,
    });
  }

  calculerPrixTotal() : number{ 
    this.listProduitSelectionne =  this.panierService.listProduitSelectionnee ; 

    this.montantTotal=0 ;
    for (let produit of this.listProduitSelectionne ) {
      this.montantTotal += produit["prixproduit"]
      console.log( this.montantTotal)
    }
    return this.montantTotal

}
    
  
  sauvegarderCommande(panier : Panier  ){
  panier.listCommande =  this.panierService.listProduitSelectionnee ; 
   panier.montanttotal = this.calculerPrixTotal(); 
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
