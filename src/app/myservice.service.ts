import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/list').pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deletenames/${id}`);
  }
  AddData(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/addname',data)
  }
}
