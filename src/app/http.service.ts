import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

const endpoint = "http://localhost:3000/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPosts(): Observable<any> {
    return this.http.get(endpoint + "posts").pipe(map(this.extractData));
  }

  addPost(post): Observable<any> {
    console.log(post);
    return this.http
      .post<any>(endpoint + "posts", JSON.stringify(post), httpOptions)
      .pipe(
        tap(post => console.log(`added post w/ id=${post.id}`)),
        catchError(this.handleError<any>("addPost"))
      );
  }

  getPostById(id): Observable<any> {
    return this.http
      .get(endpoint + "posts/" + id)
      .pipe(map(this.extractData));
  }

  updatePicture(id, image): Observable<any> {
    return this.http
      .put(endpoint + "posts/" + id, image, httpOptions)
      .pipe(
        tap(_ => console.log(`updated picture id=${id}`)),
        catchError(this.handleError<any>("updatePicture"))
      );
  }

  
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
