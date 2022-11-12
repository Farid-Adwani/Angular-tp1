import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  color: String = "black";
  size: number = 10;
  font: String = "Arial";
  text: String = "Hello I'm Farid Adwani a 4th year software engineering student at INSAT";
  fonts: String[] = ["Arial", "Monospace", "Verdana", "Courier"];
  image = "word.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  getImage() {
    return "assets/" + this.image;
  }

}
