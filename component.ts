import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import{HttpClient}from '@angular/common/http';
import{ Response} from 'selenium-webdriver/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm:FormGroup;
  title = 'login form';
  userlist;
  constructor(private http:HttpClient){
  this.userForm=new FormGroup({
    'username':new FormControl(),
    'userage':new FormControl(),
    'useremail':new FormControl(),
  });
  this.http.get('http://5cdd0a92b22718001417c19d.mockapi.io/api/users')
  .toPromise()
  .then((Response)=>{console.log(Response)
  this.userlist=Response;})
  }
  SubmitForm(){console.log(this.userForm.value);
  }
 
}
