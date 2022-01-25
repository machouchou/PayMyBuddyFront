import { IResponse } from './../interface/response';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/users';
  private userFriendsUrl = 'http://localhost:8080/listFriend';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl)
    .pipe(
      tap(userData => console.log('Users : ' + JSON.stringify(userData))),
      shareReplay(),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code : ${error.status}, error message is: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage)
  }

  getUserFriends(email: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('email', email);

    return this.http.get<IResponse>(this.userFriendsUrl, {params: params})
    .pipe(
      tap(response => console.log('userFriends : ' + JSON.stringify(response))),
      shareReplay(),
      catchError(this.handleError)
    );
  }
}
