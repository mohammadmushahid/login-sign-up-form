
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
  myData: any[] = [];
  constructor(private formBuilder: FormBuilder , private router: Router) { }
  ngOnInit(): void {
    this.signupForm();
    console.log("myData===>", this.myData)
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
    // this.myData.push(this.signupReactiveForm.value);
    console.log("myyyy===>",this.myData);
    localStorage.setItem('myAccount',JSON.stringify(this.signupReactiveForm.value)); //JSON.stringify use for save Object Data
    this.router.navigate(['/login'])

  }

}







 









