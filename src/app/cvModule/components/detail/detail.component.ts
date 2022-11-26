import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cv } from '../../models/cvModel/Cv';
import { CvService } from '../../services/CvService/cv.service';
import { EmbaucheService } from '../../services/EmbaucheService/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv!: Cv;
  @Input() embauched = false;

  id: number = 0;

  constructor(private cvService: CvService, private embaucheService: EmbaucheService, private router: ActivatedRoute) {
    router.params.subscribe(params => {
      this.id = params['id']
      this.cv = this.cvService.getOne(this.id);
      console.log(this.cv);

    });
  }

  embaucher(cv: Cv) {
    this.embaucheService.add(cv);
  }
  desEmbaucher(cv: Cv) {
    this.embaucheService.delete(cv);
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

}


