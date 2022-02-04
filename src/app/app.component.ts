import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qoutes';
  qoutes:string[];

  constructor(){
    this.qoutes =["Every pain gives a lesson and every lesson changes a person",  
  "Common sense is not a gift, it's a punishment because you have to deal with everyone who deesnt have it"]
  }

}
