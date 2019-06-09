import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mapshow',
  templateUrl: './mapshow.component.html',
  styleUrls: ['./mapshow.component.css']
})
export class MapshowComponent implements OnInit {
	
	name = 'Angular 5';
  lat:any;
  lng:any;
  constructor() {
  	if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
   }

  ngOnInit() {
  }

}
