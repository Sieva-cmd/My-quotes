import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-display-qoute',
  templateUrl: './display-qoute.component.html',
  styleUrls: ['./display-qoute.component.css']
})
export class DisplayQouteComponent implements OnInit {
  quotes:Quotes[] =[
    {id:1, name:'Sieva Lucia', lists:'Every pain gives a lesson and every lesson changes a person',author:'Martin Luther', upvote:'',downvote:''},
    {id:2, name:'Brian Githinji',lists:'Common sense is not a gift, it`s a punishment because you have to deal with everyone who deesnt have it', author:'Nelson Madela',upvote:'',downvote:' '},
  ]

  numberOfLikes :number = 1;
  numberOfDislikes :number =0;

  likeButtonClick(){
this.numberOfLikes++;
  }
  dislikeButtonClick(){
this.numberOfDislikes--;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
