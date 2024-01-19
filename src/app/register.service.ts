import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl:string="https://localhost:44335/api/v1/User/Register";
  private apiUrl1:string="https://localhost:44335/api/v1/User/Login";
  constructor(private _http:HttpClient) { }
  registerUser(regobj:any):Observable<any>{                                                        //: Observable<any>
    //var body = {user:this.user}
   // const headers = new HttpHeaders().set('content-type','application/json');
   return this._http.post<any>(this.apiUrl,regobj)
  }

  loginUser(loginobj:any):Observable<any>{
    return this._http.post<any>(this.apiUrl1,loginobj)
  }
}
