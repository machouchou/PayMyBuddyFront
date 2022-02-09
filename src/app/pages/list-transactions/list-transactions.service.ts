import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createRequestOption } from 'src/app/utility/request-options'
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

  public getUserTransactions(data: any) {
    const options = createRequestOption(data);
    return this.http.get(`${this.apiUrl}/transaction`, {params:options,observe:'response'}
    );
  }
}


