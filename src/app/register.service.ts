import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl="https://localhost:44335/api/v1/User/Register";

  constructor(private _http:HttpClient) { }
  registerUser(regobj:any){
    //var body = {user:this.user}
   // const headers = new HttpHeaders().set('content-type','application/json');
   return this._http.post<any>(this.apiUrl,regobj)
  }
}
