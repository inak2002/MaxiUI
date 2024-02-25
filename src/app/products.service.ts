import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

// Define an interface for the API response
export interface ApiResponse {
  result: any[];
  // Add other properties if needed
}
@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  private productUrl="https://localhost:44335/api/v1/Product";
  private filterUrl = "https://localhost:44335/api/v1/Product/Filter";
  private getCategory="https://localhost:44335/api/v1/Category";
  constructor(private http:HttpClient) { }
  getProducts(): Observable<any[]> {
    return this.http.get<ApiResponse>(this.productUrl).pipe(map(response=>response.result || []),
    tap(data=>console.log('received data from api:',data)));
}

addProduct(productData: any): Observable<any> {
 
  return this.http.post<any>(this.productUrl, productData);
}

editProduct(productData:any){
  return this.http.put<any>(this.productUrl,productData)
}
deleteProduct(id:number):Observable<any>{
  const deleteUrl=`${this.productUrl}?id=${id}`;
return this.http.delete<any>(deleteUrl)
}
filterProduct(categoryId: number, brandId: number):Observable<any>{
  const url = `${this.filterUrl}?categoryId=${categoryId}&brandId=${brandId}`;
  return this.http.get<any>(url);
}

// GetCategory(): Observable<any[]>{
//   return this.http.get<ApiResponse>(this.getCategory).pipe(map(response=>response.result || []),
//   tap(data=>console.log('received data from api:',data)));
// }

}
