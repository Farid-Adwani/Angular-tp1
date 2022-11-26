import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrls: ['./authentification-form.component.css']
})
export class AuthentificationFormComponent implements OnInit {


  name = new FormControl('');
  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
  }

  onSubmit(formulaire: FormGroupDirective) {
    console.log(formulaire);
  }


}
