import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
	show=3;
	 getData:any;
	constructor(public dataservice:ServiceService, private router: Router) { }

	ngOnInit() {
	this.dataservice.login().subscribe(res=>{
	 this.getData=res;
	 console.log(res)
	})
	}
userData(value){
	for(let i=0;i<this.getData.length;i++){
	 if(value.email==this.getData[i].email){
	 	if(value.password==this.getData[i].password){
	 		if(value.role==this.getData[i].role){
	 			if(this.getData[i].role=='0'){
		 		this.router.navigate(["/user"]);
				console.log('home');
				break;
				}else{
				this.router.navigate(["/vehicle-owner-details"]);
				console.log('home');
				break;
				}
			}else{
			 alert('Role Incorrect');
			 break;
			}
		 }else{
		  alert('Password Incorrect');
		  break;
		 }
	}
		
	}
	
  }
  change(value){
  this.show = value;
  console.log(this.show)
 }
}

