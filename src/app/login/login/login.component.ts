import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helper/validateForm';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder,private rs:RegisterService,private router:Router){}
 ngOnInit(): void {
  this.loginForm=this.fb.group({
    username:['',Validators.required],  //this is the form control name
    password:['',Validators.required]   //this is the form contol name
  })
 }
   hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text":this.type="password";
   }
   onLogin(){
    if(this.loginForm.valid){
      //send obj to database
      console.log(this.loginForm.value)
      this.rs.loginUser(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        },
        error:(err)=>{
          alert(err.error.message)
        }
      })
    }else{
    
      //throw the error using toaster and with required fields
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your form is invalid")
    }
   }
}
