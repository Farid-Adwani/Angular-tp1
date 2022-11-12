import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/CvService/cv.service';
import { EmbaucheService } from '../services/EmbaucheService/embauche.service';
import { Cv } from './cvModel/Cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cv!: Cv;
  isHidden = true;

  constructor(private cvService: CvService, private embaucheService: EmbaucheService) { }

  changeSelected(cv: Cv) {
    this.cv = cv;
    this.isHidden = false;
  }

  getCvs(): Cv[] {
    return this.cvService.getAll();
  }

  getEmbauches(): Cv[] {
    return this.embaucheService.getAll();
  }


  ngOnInit(): void {
  }

}
