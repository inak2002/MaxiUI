import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl="https://localhost:44335/api/v1/Product";
  constructor(private http:HttpClient) { }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productUrl);
}
}
