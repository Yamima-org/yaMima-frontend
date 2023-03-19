import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  paymentMethods = [    { label: 'Visa', value: 'visa' },    { label: 'Mastercard', value: 'mastercard' }  ];

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){}
}
