import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import ValidateForm from '../helper/validateForm';
import { customEmailValidator } from '../helper/customValidator';
import { passwordValidator } from '../helper/passwordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type:string="password";

  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  registrationForm!:FormGroup;
  message:string='registration success';


  constructor(private fb:FormBuilder,private rs:RegisterService){}
  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      firstname:['',Validators.required],  //this is the form control name

      lastname:['',Validators.required], //this is the form contol name
      email:['',[Validators.required,customEmailValidator()]],
      password:['',[Validators.required,passwordValidator()]]
    })
    }
     hideShowPass(){
      debugger;
      this.isText=!this.isText;
      this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
      this.isText ? this.type="text":this.type="password";
     }
     onRegister(){
      
      if(this.registrationForm.valid){
        //send obj to database
       
       
        console.log('Request Payload:', this.registrationForm.value);
this.rs.registerUser(this.registrationForm.value)
        this.rs.registerUser(this.registrationForm.value)
        .subscribe({
          next:(res=>{
            console.log('Registration Response:', res);
            alert(res?.displayMessage);
            this.registrationForm.reset();
           // this.router.navigate(['dashboard']);
           
          }),
          error:(err=>{
            console.error(err);
            alert('registration failed');
          })
        })
 console.log(this.registrationForm.value)
      }else{
      
        //throw the error using toaster and with required fields
        ValidateForm.validateAllFormFields(this.registrationForm);
        alert("Your form is invalid")
      }
     } }
  


//https://localhost:44335/api/v1/User/Register
