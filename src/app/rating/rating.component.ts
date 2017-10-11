import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../ibook';

@Component({
  selector: 'my-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Input() book: IBook;
  @Output() ratingClicked: EventEmitter<IBook> = new EventEmitter<IBook>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }

  click(rating: number): void {
    this.book.rating = rating;
    this.ratingClicked.emit(this.book);
  }
}
