import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { MatSnackBar } from '@angular/material'
import { DataService } from '../services/data.service';

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

  public books: Array<IBook>;

  constructor(private _dataService: DataService, private _snackBar: MatSnackBar) {
    this.startTime = new Date();
    this.startTime.setHours(10, 0);
    this.endTime = new Date();
    this.endTime.setHours(15, 0);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this._dataService.getBooks()
    .subscribe(
      books => this.books = books,
      error => this.updateMessage(<any>error, 'ERROR')
    )
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
