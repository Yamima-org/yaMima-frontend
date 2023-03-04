import { Image } from '../models/image';
export class    Product {

public idProduct : number ; 
public nameproduct : string ; 
public statut : boolean ;
public sizeproduct : string  ; 
public description : string ; 
public ingredients : string ; 
public price : string ; 
public images :Image[] ;



// public constructor (idProduct : number , nameproduct : string , statut : string ,sizeproduct:string ,
//     description: string , ingredients : string ,price : string , images : Image ) {
//     this.idProduct ; 
//     this.nameproduct ; 
//     this.sizeproduct;
//     this.description ;
//     this.ingredients;
//     this.price;
//     this.images ;
// }
}