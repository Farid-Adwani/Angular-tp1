import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../cv/cvModel/Cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv!: Cv;
  @Output() itemEvent = new EventEmitter<Cv>();

  constructor() { }
  getImage(): string {
    return "assets/" + this.cv.path;
  }
  changeDetail() {
    this.itemEvent.emit(this.cv);

  }
  ngOnInit(): void {
  }

}
