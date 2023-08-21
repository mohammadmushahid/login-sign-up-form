import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.css']
})
export class ApiIntegrationComponent implements OnInit {

  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }

  public getMethod() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
    }
    );
  }

  public postMethod(){
    const header = new HttpHeaders({
      contentType: 'application/Json'
    })
    
    let body = {
      title: 'Quick',
      body: 'code',
      userId: 1,
      description: 'muhammad musahid',
    }
    this.http.post('https://jsonplaceholder.typicode.com/posts',body, {headers: header}).subscribe((data) => {
      console.log(data);
      this.postJsonValue = data;
    }
    );
  }


}
