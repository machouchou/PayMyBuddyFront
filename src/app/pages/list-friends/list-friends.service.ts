import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListFriendsService {
  private apiUrl = `${environment.apiUrl}/`;
  constructor(private http: HttpClient) {
  }

  public getUserFriends(email: string) {
    return this.http.get(`${this.apiUrl}/listFriend?email=${email}`, httpOptions);
  }
}
