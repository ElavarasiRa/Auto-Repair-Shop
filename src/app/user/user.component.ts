import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	see:any=3;
	display:any=1;
  constructor(public data:ServiceService) { }

  ngOnInit() {
  }
 
sendData(value){
	
}

 change(value){
  this.see = value;
  console.log(this.see)
 }

 difference(value){
  this.display=value;
  console.log(this.display)
  if(value==0){
  alert('price: $50')
  }else{
  alert('price: $180')
  }
 }
}
