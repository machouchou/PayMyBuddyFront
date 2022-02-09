import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRegistration } from './registration.model';

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

  public registrate(registration: IRegistration) {
    return this.http.post(`${this.apiUrl}/user`,
     registration,
      httpOptions
    );
  }
}
