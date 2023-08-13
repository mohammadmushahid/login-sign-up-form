import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-signup-project';
  header!: boolean;
  currentURL!: string;

  constructor(private router: Router , private location: Location){}

  ngOnInit(): void {
    this.routerfunction();
  }

  routerfunction(){
    this.router.events.subscribe((val) =>{
      if(this.location.path() != ''){
        this.currentURL = this.location.path();
        if(this.currentURL === '/login' || this.currentURL === '/sign-up'){
            this.header = false
        }else{
          this.header = true;
        }
      }


    })
  }
}
