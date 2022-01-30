import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListTransactionsService {
  private apiUrl = `${environment.apiUrl}/`;
  constructor(private http: HttpClient) {
  }

  public getUserTransactions(email: string) {
    return this.http.get(`${this.apiUrl}/transaction?email=${email}`, httpOptions);
  }
}


