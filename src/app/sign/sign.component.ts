import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){}

  musahid!: FormGroup;
  


  ngOnInit(): void {
    this.signreactiveform();
    console.log(this.musahid.value)
  }

  signreactiveform(){
    this.musahid = this.formBuilder.group({
      'email': [null ,[Validators.required]],
      'password': [null ,[Validators.required]],
    })
  }

  handles(){
   console.log(this.musahid.value)
  }
  }
