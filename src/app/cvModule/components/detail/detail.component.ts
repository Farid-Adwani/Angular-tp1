import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../../models/cvModel/Cv';
import { EmbaucheService } from '../../services/EmbaucheService/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv!: Cv;
  @Input() embauched = false;
  constructor(private embaucheService:EmbaucheService) {

  }
 
  embaucher(cv:Cv){
      this.embaucheService.add(cv);
  }
  desEmbaucher(cv:Cv){
    this.embaucheService.delete(cv);
}
  ngOnInit(): void {
  }

}


