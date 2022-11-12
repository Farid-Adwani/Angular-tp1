import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImagePipe'
})
export class DefaultImagePipePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): String {
    if (value.trim() == "") {
      return "assets/default.png"
    }
    return value;
  }

}
