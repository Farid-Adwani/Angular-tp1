import { Component, OnInit } from '@angular/core';
import { Cv } from '../../models/cvModel/Cv';
import { CvService } from '../../services/CvService/cv.service';
import { EmbaucheService } from '../../services/EmbaucheService/embauche.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cv!: Cv;

  constructor(private cvService: CvService, private embaucheService: EmbaucheService) { }

  changeSelected(cv: Cv) {
    this.cv = cv;
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
