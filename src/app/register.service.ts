import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl:string="https://localhost:44335/api/v1/User/Register";
  private apiUrl1:string="https://localhost:44335/api/v1/User/Login";
 
  constructor(private _http:HttpClient,private auth:AuthService) { }
  registerUser(regobj:any):Observable<any>{                                                        //: Observable<any>
    //var body = {user:this.user}
   // const headers = new HttpHeaders().set('content-type','application/json');
   return this._http.post<any>(this.apiUrl,regobj)
  }

  loginUser(credentials:any): Observable<any> {
    // var body = {
    //   "email": credentials.username,
    //   "password": credentials.password
    // }
    return this._http.post(this.apiUrl1,credentials)
      
      }

 
}
