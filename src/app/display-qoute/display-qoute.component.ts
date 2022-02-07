import { Component, OnInit} from '@angular/core';
import { Quotes } from '../quotes';
import { DisplayDetailComponent } from '../display-detail/display-detail.component';

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

  path ='/assets/images/logo.png';

  deleteQuote(isComplete:any, index:any){
this.quotes.splice(index,1);
  }

  addNewQuote(quote:any){
let quoteLength = this.quotes.length;
quote.id = quoteLength +1;
quote.submittedDate = new Date(quote.submittedDate)
this.quotes.push(quote)
  }

  // preNum!:number
  // lastNum!:number
  // counter!:number

  // highestUpvote(){
  //   this.preNum = 0
  //   this.lastNum = 0

  //   for(this.counter=1 ; this.counter < this.quotes.length; this.counter++) {
  //     this.lastNum = this.quotes[this.counter].numberOfLikes;
  //     if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  //   }
  //   return  this.preNum
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
