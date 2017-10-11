import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'my-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  startTime: Date;
  endTime: Date;
  pageTitle: string = 'Books';
  showOperatingHours: boolean = false;

  public books: Array<IBook> = [
    {
      id: 1,
      title: "JavaScript - The Good Parts",
      author: "Douglas Crockford",
      isCheckedOut: true,
      rating: 3
    },
    {
      id: 2,
      title: "The Wind in the Willows",
      author: "Kenneth Grahame",
      isCheckedOut: false,
      rating: 4
    },
    {
      id: 3,
      title: "Pillars of the Earth",
      author: "Ken Follett",
      isCheckedOut: true,
      rating: 5
    },
    {
      id: 4,
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J. K. Rowling",
      isCheckedOut: false,
      rating: 5
    }
  ]

  constructor(private _snackBar: MatSnackBar) {
    this.startTime = new Date();
    this.startTime.setHours(10, 0);
    this.endTime = new Date();
    this.endTime.setHours(15, 0);
  }

  ngOnInit() {
  }

  updateMessage(message: string, type: string): void {
    if (message) {
      this._snackBar.open(`${type}: ${message}`, 'DISMISS', {
        duration: 3000
      });
    }
  }
  onRatingUpdate(book: IBook): void {
    this.updateMessage(book.title, " Rating has been updated");
  }
}
