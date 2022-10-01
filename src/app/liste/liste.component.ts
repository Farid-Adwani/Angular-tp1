import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() listeCvs=[{}];
  selected=0;
  sconstructor() { }
  changeSelected(index:number){
    this.selected=index;
    this.listEvent.emit(this.selected);
    // console.log("index= "+this.selected);
  }

  @Output() listEvent=new EventEmitter<number>();

 
  

  ngOnInit(): void {
  }

}
