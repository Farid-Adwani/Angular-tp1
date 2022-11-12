import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../../models/cvModel/Cv';

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
