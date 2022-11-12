import { Injectable } from '@angular/core';
import { Cv } from '../../models/cvModel/Cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  cvs: Cv[] =
    [{
      id: 0, "firstname": "Farid",
      name: "Adwani",
      age: 22,
      job: "Etudiant",
      path: "assets/farid.jpg"
    },
    {
      id: 1, "firstname": "AlaEddine",
      name: "Hamroun",
      age: 22,
      job: "Etudiant",
      path: "assets/gadget2.png"
    },
    {
      id: 2, "firstname": "Yosr",
      name: "Ali",
      age: 21,
      job: "Etudiante",
      path: "assets/gadget3.png"
    }
      ,
    {
      id: 3, "firstname": "Ahmed",
      name: "Bali",
      age: 23,
      job: "Etudiant",
      path: " "
    }
    ];

  getAll(): Cv[] {
    return this.cvs;
  }
  constructor() { }
}
