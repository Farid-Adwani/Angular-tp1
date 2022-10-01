import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../cv/cvModel/Cv';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() cv!: Cv;
  @Input() isHidden = true;
  constructor() {

  }
  getImage(): string {
    return "assets/" + this.cv.path;
  }
  ngOnInit(): void {
  }

}


