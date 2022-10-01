import { Component, OnInit } from '@angular/core';
import { Cv } from './cvModel/Cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cv!: Cv;
  detailHidden = true;
  cvs: Cv[] =
    [{
      id: 0, "firstname": "Farid",
      name: "Adwani",
      age: 22,
      job: "Etudiant",
      path: "farid.jpg"
    },
    {
      id: 1, "firstname": "AlaEddine",
      name: "Hamroun",
      age: 22,
      job: "Etudiant",
      path: "gadget2.png"
    },
    {
      id: 2, "firstname": "Yosr",
      name: "Ali",
      age: 21,
      job: "Etudiante",
      path: "gadget3.png"
    }
    ]
  constructor() { }
  changeSelected(cv: Cv) {
    this.cv = cv;
    this.detailHidden = false;
  }

  ngOnInit(): void {
  }

}
