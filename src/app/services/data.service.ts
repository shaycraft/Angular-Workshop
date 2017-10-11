import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import { IBook } from '../ibook';


@Injectable()
export class DataService {
  private _booksUrl = 'http://waelsbookservice.azurewebsites.net/api/books';

  constructor(private _http: Http) { }

  getBooks(): Observable<IBook[]> {
    return this._http.get(this._booksUrl)
      .map((response: Response) => {
        let data: IBook[] = <IBook[]>response.json();
        return data;
      })
      .catch(this.handleError);
  }

  getBook(id: number): Observable<IBook> {
    return this.getBooks()
      .map((books: IBook[]) => books.find(b => b.id === id))
      .catch(this.handleError);
  }

  updateBook(book: IBook): Observable<void> {
    return this._http.put(this._booksUrl, book)
      .map((response: Response) => { return })
      .catch(this.handleError);
  }

  getPreviousBookId(id: number): Observable<number> {
    return this.getBooks()
      .map((books: IBook[]) => {
        return books[Math.max(0, books.findIndex(b => b.id === id) - 1)].id;
      })
      .catch(this.handleError);
  }
  getNextBookId(id: number): Observable<number> {
    return this.getBooks()
      .map((books: IBook[]) => {
        return books[Math.min(books.length - 1, books.findIndex(b => b.id === id) + 1)].id;
      })
      .catch(this.handleError);
  }
  deleteBook(id: number): Observable<void> {
    return this._http.delete(`${this._booksUrl}/${id}`)
      .map((response: Response) => {
        return;
      })
      .catch(this.handleError);
  }

  addBook(book: IBook): Observable<void> {
    return this._http.post(this._booksUrl, book)
      .map((response: Response) => {
        return;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ?
      `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
