
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {
 

  @Input() quote!:Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  numberOfLikes :number = 1;
  numberOfDislikes :number =0;


  likeButtonClick(index:any){
this.numberOfLikes++;

  }
  dislikeButtonClick(index:any){    
this.numberOfDislikes++;

  }

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }


 



  constructor() { }

  ngOnInit(): void {
  }

}
