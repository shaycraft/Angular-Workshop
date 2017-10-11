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

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ?
      `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
