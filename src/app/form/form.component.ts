import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newQuote = new Quotes (0, "", "","", new Date());
@Output() addQuote =new EventEmitter<Quotes>();

submitQuote(){
  this.addQuote.emit(this.newQuote);
}

 path ='/assets/images/logoImage.png'

  constructor() { }

  ngOnInit(): void {
  }

}
