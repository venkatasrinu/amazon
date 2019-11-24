import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit() {
  }
  password;email;data

  loginfun(){
    var data={email:this.email,password:this.password}
    console.log(data)
    this.http.post("/api/users/ins",data).subscribe(dj=>{
    
      console.log(dj,"daadadada")
    })
    alert("email working"+data.email)
  }




}