import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private formBuilder: FormBuilder , private router: Router){}

  musahid!: FormGroup;
  myAccountData!: any;


  ngOnInit(): void {
    let mydata: any = localStorage.getItem('myAccount');
    this.myAccountData = JSON.parse(mydata)
    this.handles();
    
  }

  malikji(){
    this.musahid = this.formBuilder.group({
      'email': [null ,[Validators.required]],
      'password': [null ,[Validators.required]],
    })
  }

  handles(){
    if(this.musahid.value.email === this.myAccountData.email && this.musahid.value.password === this.myAccountData.password){
      console.log("login Successfully!!");
      this.router.navigate(['/manage-employee'])
    }else{
      alert("Please Fill Correct Information!!!")
    }
  }
  }
