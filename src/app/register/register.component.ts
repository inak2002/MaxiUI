import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  constructor(private _http:HttpClient){}
  onSubmit() {
    // Handle registration logic here
    this.registerUser().subscribe(response =>{    //call back method
      alert("User registration done")
      console.log('User registered:', this.register);
    }); 
   
    // You should send this data to the backend for further processing
  }
  registerUser(){
    var body = {user:this.register}
    const headers = new HttpHeaders().set('content-type','application/json');
    return this._http.post("https://localhost:44335/api/v1/User/Register",body,{headers})
  }
}

//https://localhost:44335/api/v1/User/Register
