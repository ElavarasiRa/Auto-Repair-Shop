import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
show=3;
  constructor(public data:ServiceService) { }

  ngOnInit() {
  }
sendData(value){
  
  
  
  this.data.senddata(value).subscribe(res=>{
  console.log(res)
   })
  
  
 
 }
 change(value){
  this.show = value;
  console.log(this.show)
 }

}
