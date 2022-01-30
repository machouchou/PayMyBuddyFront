import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private apiUrl = `${environment.apiUrl}/`;

  constructor(private http: HttpClient) { }

  public addFriend(userEmail: string, friendEmail: string) {
    return this.http.post(`${this.apiUrl}/addFriend`,
    {
      userEmail,
      friendEmail
    },
    httpOptions
  );
  }
}
