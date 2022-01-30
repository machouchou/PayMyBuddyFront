import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiUrl}/`;

  constructor(private http: HttpClient) {
  }

  public authenticate(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/userLogin`,
      {
        email,
        password
      },
      httpOptions);
  }
}
