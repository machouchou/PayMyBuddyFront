import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = `${environment.apiUrl}/`;

  constructor(private http: HttpClient) {
  }

  public registrate(firstName: string, lastName: string, birthDate: number,
                    address: string, country: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/userLogin`,
      {
        firstName,
        lastName,
        birthDate,
        address,
        email,
        password
      },
      httpOptions
    );
  }
}
