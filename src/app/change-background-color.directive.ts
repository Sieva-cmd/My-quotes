
import { Directive, ElementRef } from '@angular/core';
import { DisplayDetailComponent } from './display-detail/display-detail.component';

@Directive({
  selector: '[appChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective {

  constructor(private elem: ElementRef) {
    const getArrayMax = (numberOfLikes: any) => {
      return Math.max.apply(null, numberOfLikes);
     
    }
    (<HTMLElement>this.elem.nativeElement).style.backgroundColor="pink";
 
  
  }

}
