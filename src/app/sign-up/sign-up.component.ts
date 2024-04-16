
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupReactiveForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.signupForm();
    console.log("myData===>", this.signupReactiveForm.value)
  }

  signupForm(){
    this.signupReactiveForm = this.formBuilder.group({
      'firstName' : [null, [Validators.required]],
      'lastName': [null],
      'Email': [null, [Validators.required]],
      'password': [null, [Validators.required]],
      
    })
  }

  submitStudentForm(){
    console.log(this.signupReactiveForm.value);
    localStorage.setItem('myAccount',JSON.stringify (this.signupReactiveForm.value));
    this.router.navigate(['/sign'])

    // alert('bore')
  }

}







 









