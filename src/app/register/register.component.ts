import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import ValidateForm from '../helper/validateForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  registrationForm!:FormGroup;
  // user = {
  //   FirstName: '',
  //   LastName: '',
  //   Email: '',
  //   Password: ''
  // };

  constructor(private fb:FormBuilder,private rs:RegisterService){}
  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      firstname:['',Validators.required],  //this is the form control name
      lastname:['',Validators.required], //this is the form contol name
      email:['',Validators.required],
      password:['',Validators.required]
    })
    }
     hideShowPass(){
      this.isText=!this.isText;
      this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
      this.isText ? this.type="text":this.type="password";
     }
     onRegister(){
      if(this.registrationForm.valid){
        //send obj to database
        console.log(this.registrationForm.value)
        this.rs.registerUser(this.registrationForm.value)
        .subscribe({
          next:(res)=>{
            alert(res.message);
            this.registrationForm.reset();
           // this.router.navigate(['dashboard']);
          },
          error:(err)=>{
            alert(err.error.message)
          }
        })
      }else{
      
        //throw the error using toaster and with required fields
        ValidateForm.validateAllFormFields(this.registrationForm);
        alert("Your form is invalid")
      }
     }
  // onSubmit() {
  //   // Handle registration logic here
  //   this.registerUser().subscribe(response =>{    //call back method
  //     alert("User registration done")
  //     console.log('User registered:', this.user);
  //   }); 
   
    // You should send this data to the backend for further processing
  }
  


//https://localhost:44335/api/v1/User/Register
