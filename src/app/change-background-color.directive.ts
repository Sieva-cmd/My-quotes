
import { Directive, ElementRef } from '@angular/core';
import { DisplayDetailComponent } from './display-detail/display-detail.component';

@Directive({
  selector: '[appChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective {

  constructor(private elem: ElementRef) {
   
      (<HTMLElement>this.elem.nativeElement).style.backgroundColor="pink";
  
  }

}
