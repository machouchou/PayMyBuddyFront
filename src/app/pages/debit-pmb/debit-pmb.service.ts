import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DebitPmbService {
  private apiUrl = `${environment.apiUrl}/`;

  constructor(private http: HttpClient) { }

  public debitAccountPMD(email: string, depositMoney: number, description: string) {
    return this.http.post(`${this.apiUrl}/sendMoney`,
    {
      email,
      depositMoney,
      description
    },
    httpOptions);
  }
}
