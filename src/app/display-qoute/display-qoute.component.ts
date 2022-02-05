import { Component, OnInit} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-display-qoute',
  templateUrl: './display-qoute.component.html',
  styleUrls: ['./display-qoute.component.css']
})
export class DisplayQouteComponent implements OnInit {
  quotes:Quotes[] =[
  new Quotes  (1, 'Sieva Lucia','Every pain gives a lesson and every lesson changes a person','Martin Luther', new Date(2022,1,20)),
 new Quotes (2, 'Brian Githinji','Common sense is not a gift, it`s a punishment because you have to deal with everyone who deesnt have it', 'Nelson Madela',new Date(2022,1,14)),
  ]

  

  deleteQuote(isComplete:any, index:any){
this.quotes.splice(index,1);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
