import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProfileDtoService {
  private apiUrl = `${environment.apiUrl}/`;

  constructor(private http: HttpClient) {
  }

  public getUser(email: string) {
    return this.http.get(`${this.apiUrl}/profile?email=${email}`, httpOptions);
  }
}



