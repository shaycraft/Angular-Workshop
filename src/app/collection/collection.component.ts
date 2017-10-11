import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { MatSnackBar, MatDialog } from '@angular/material'
import { DataService } from '../services/data.service';
import { Router } from "@angular/router";
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { NewBookComponent } from '../new-book/new-book.component';

@Component({
  //selector: 'my-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  startTime: Date;
  endTime: Date;
  pageTitle: string = 'Books';
  showOperatingHours: boolean = false;

  public books: Array<IBook>;

  constructor(private _dataService: DataService, private _snackBar: MatSnackBar, private _dialog: MatDialog, private _router: Router) {
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
    this.updateBook(book);
    this.updateMessage(book.title, " Rating has been updated");
  }

  updateBook(book: IBook) {
    this._dataService.updateBook(book)
      .subscribe(() => {
        this._snackBar.open(`"${book.title}" has been updated!`, 'DISMISS', {
          duration: 3000
        });
      }, error => this.updateMessage(<any>error, 'ERROR'));
  }

  openDialog(bookId: number): void {
    let config = { width: '650px', height: '400x', position: { top: '50px' } };
    let dialogRef = this._dialog.open(BookDetailComponent, config);
    dialogRef.componentInstance.bookId = bookId;
    dialogRef.afterClosed().subscribe(res => {
      this.getBooks();
    });
  }
  openRoute(bookId: number): void {
    this._router.navigate(['/collection', bookId]);
  }

  delete(book: IBook) {
    this._dataService
      .deleteBook(book.id)
      .subscribe(() => {
        setTimeout(() => {
          this.getBooks()
        }, 500);
        this._snackBar.open(`"${book.title}" has been deleted!`,
          'DISMISS', {
            duration: 3000
          });
      }, error => this.updateMessage(<any>error, 'ERROR'));
  }

  addBook(book: IBook): void {
    let config = {
      width: '650px', height: '650px', position: { top: '50px' }, disableClose: true
    };

    let dialogRef = this._dialog.open(NewBookComponent, config);

    dialogRef.afterClosed().subscribe(newBook => {
      if (newBook) {
        newBook.id = this.books.length + 1;
        this._dataService.addBook(newBook)
          .subscribe(() => {
            this.getBooks();
            this._snackBar.open(`Book added!`,
              'DISMISS', {
                duration: 3000
              });
          },
          error => this.updateMessage(<any>error, 'ERROR'))
      }
    });
  }

}
