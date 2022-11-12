import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from 'src/app/cv/cvModel/Cv';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  embaucheCvs: Cv[] = [];

  add(cv: Cv) {
    if (this.embaucheCvs.indexOf(cv) != -1) {
      this.toastr.error("Error", cv.firstname + "is already hired");
    } else {
      this.embaucheCvs.push(cv);
      this.toastr.success("Success", cv.firstname + " is hired");
    }
  }
  delete(cv: Cv) {
    this.embaucheCvs.splice(this.embaucheCvs.indexOf(cv), 1);
    this.toastr.success("Success", cv.firstname + " is fired");

  }
  getAll(): Cv[] {
    return this.embaucheCvs;
  }

  constructor(private toastr: ToastrService) { }
}
