import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
	firstData:any;
    getData:any;
  constructor(public http:Http) { }

  senddata(value){
  console.log(value);
  return this.http.post('https://5cc099c282ec6a00149f3dae.mockapi.io/api/v1/usersignup',value)
  .pipe(map(data=>this.firstData=data.json()))
  }

  login(){
  return this.http.get('https://5cc099c282ec6a00149f3dae.mockapi.io/api/v1/usersignup')
  .pipe(map(data=>this.getData=data.json()))
  }
}
