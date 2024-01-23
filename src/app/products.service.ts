import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

// Define an interface for the API response
interface ApiResponse {
  result: any[];
  // Add other properties if needed
}
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private productUrl="https://localhost:44335/api/v1/Product";
  constructor(private http:HttpClient) { }
  getProducts(): Observable<any[]> {
    return this.http.get<ApiResponse>(this.productUrl).pipe(map(response=>response.result || []),
    tap(data=>console.log('received data from api:',data)));
}
}
