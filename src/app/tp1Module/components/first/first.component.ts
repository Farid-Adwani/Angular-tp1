import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
  name = "Farid Adwani";
  colorDad = "red";
  age = 19;

  constructor() { }
  changeName(neww: string) {
    this.name = neww;
  }
  changeColor(couleur: string) {
    this.colorDad = couleur;
  }
  resetColor() {
    this.colorDad = "red";
  }

  ngOnInit(): void {
  }

}
