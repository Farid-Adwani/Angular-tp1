import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv : any;
  @Output() itemEvent=new EventEmitter<number>();

  constructor() { }
  getImage():string{
    return "assets/"+this.cv.image;
  }
  changeDetail(){
    this.itemEvent.emit(this.cv.index);
    // console.log(this.cv.index +" sent to list");

  }
  ngOnInit(): void {
  }

}
