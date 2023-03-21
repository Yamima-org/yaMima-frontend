import { Image } from './image';
export class    Product {

public idProduct : number ;
public nameproduct : string ;
public statut : boolean ;
public sizeproduct : string  ;
public description : string ;
public ingredients : string ;
public price : number ;
public images:Image[] ;
public mainImage:Image;
public rating:number;
public category:string;



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
