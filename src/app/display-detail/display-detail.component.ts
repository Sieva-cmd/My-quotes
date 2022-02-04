import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-display-detail',
  templateUrl: './display-detail.component.html',
  styleUrls: ['./display-detail.component.css']
})
export class DisplayDetailComponent implements OnInit {
  // details: Detail[] = [
  //   {author:'martin Luther',upvote:'',downvote:''},

  // ]

  @Input() quote!:Quotes;

  constructor() { }

  ngOnInit(): void {
  }

}
