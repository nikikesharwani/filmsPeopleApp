import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUri:string = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  // Add Film Person
  addPeople(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all film persons
  getEmployees() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get film person by id
  getEmployee(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

   // Update person by id with data
   updateEmployee(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete person by id
  deleteEmployee(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

