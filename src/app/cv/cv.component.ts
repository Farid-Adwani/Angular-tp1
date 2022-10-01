import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selected=-1;
  cvs=[{"index":0, "prenom" : "Farid",
  "nom" : "Adwani",
  "age" : 22,
  "job" : "Etudiant",
  "image" : "farid.jpg"},
  {"index":1,"prenom" : "AlaEddine",
  "nom" : "Hamroun",
  "age" : 22,
  "job" : "Etudiant",
  "image" : "gadget2.png"},
  {"index":2, "prenom" : "Yosr",
  "nom" : "Ali",
  "age" : 21,
  "job" : "Etudiante",
  "image" : "gadget3.png"}
]
  constructor() { }
  changeSelected(index:number){
    this.selected=index;
  }

  ngOnInit(): void {
  }

}
