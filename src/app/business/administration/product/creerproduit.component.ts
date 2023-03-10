import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-creerproduit',
  templateUrl: './creerproduit.component.html',
  styleUrls: ['./creerproduit.component.scss']
})
export class CreerproduitComponent implements OnInit {
 @Input() listProduct : Product ;
 display: boolean = false;
 product : Product ;
  constructor() { }

  ngOnInit(): void {

  }




}
