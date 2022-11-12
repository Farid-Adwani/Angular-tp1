import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../cv/cvModel/Cv';
import { EmbaucheService } from '../services/EmbaucheService/embauche.service';

@Component({
  selector: 'app-embauche-list',
  templateUrl: './embauche-list.component.html',
  styleUrls: ['./embauche-list.component.css']
})
export class EmbaucheListComponent implements OnInit {

  @Input() embauches: Cv[] = [];
  constructor() { }



  ngOnInit(): void {
  }

}
