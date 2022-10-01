import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() listeCvs :any;
  @Input() selected=0;
  constructor() { }
  getImage():string{
    return "assets/"+this.listeCvs[this.selected].image;
      }
  ngOnInit(): void {
  }

}


