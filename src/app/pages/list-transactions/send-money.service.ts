import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SendMoneyService {
  private apiUrl = `${environment.apiUrl}/`;

  constructor(private http: HttpClient) { }

  public sendMoney(senderEmail: string, receiverEmail: string, description: string, transactionAmount: number) {
    return this.http.post(`${this.apiUrl}/transferMoney`,
    {
      senderEmail,
      receiverEmail,
      description,
      transactionAmount
    },
    httpOptions
    );
  }
}
