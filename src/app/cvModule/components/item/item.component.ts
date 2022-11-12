import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../../models/cvModel/Cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv!: Cv;
  @Output() itemEvent = new EventEmitter<Cv>();

  constructor() { }
  
  changeDetail() {
    this.itemEvent.emit(this.cv);

  }
  ngOnInit(): void {
  }

}
