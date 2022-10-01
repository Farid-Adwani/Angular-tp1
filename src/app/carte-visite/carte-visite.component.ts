import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {
  prenom = "Farid";
  nom = "Adwani";
  age = 22;
  job = "Etudiant";
  image = "farid.jpg";
  citation = "si on veut on peut";
  description_travail = "je suis un etudiant a l'INSAT en GL4";
  mots = "Angular Nest Js";
  @Input() color="white";
  myFavoriteColor="green";
  @Output() myFavoriteColorEvent=new EventEmitter<string>();
  reset() {
    this.prenom = "Farid";
    this.nom = "Adwani";
    this.age = 22;
    this.job = "Etudiant";
    this.image = "farid.jpg";
    this.citation = "si on veut on peut";
    this.description_travail = "je suis un etudiant a l'INSAT en GL4";
    this.mots = "Angular Nest Js";
  }
  getImage():string{
return "assets/"+this.image;
  }
  changeDadColor(){
    this.myFavoriteColorEvent.emit(this.myFavoriteColor);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
