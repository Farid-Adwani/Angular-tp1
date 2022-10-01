import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../cv/cvModel/Cv';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() listeCvs!:Cv[];
  cv!:Cv;
  sconstructor() { }
  changeSelected(cv:Cv){
    this.cv=cv;
    this.listEvent.emit(this.cv);
  }

  @Output() listEvent=new EventEmitter<Cv>();

 
  

  ngOnInit(): void {
  }

}
