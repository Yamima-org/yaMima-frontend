import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Exemple } from './models/Exemple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yaMima';
  public exemple : Exemple = {id :3 , nom : "bouali" , prenom : "amal"}

 constructor (private  httpClient : HttpClient ){

}

sauvegarderExemple() {
  let url ="http://localhost:8080/saveExemple"

  this.httpClient.post(url ,{id :3 , nom : "bouali" , prenom : "amal"} ).toPromise().then((data : any)=>{
    console.log(data)
  })
}

}
