import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DepositAmountService {
  private apiUrl = `${environment.apiUrl}/`;

  constructor(private http: HttpClient) { }

  public addMoneyOnPMD(email: string, depositMoney: number, description: string) {
    return this.http.post(`${this.apiUrl}/depositAmount`,
    {
      email,
      depositMoney,
      description
    },
    httpOptions);
  }
}
