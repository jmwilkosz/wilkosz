import { Component, OnInit } from '@angular/core';
import { GoogleMapsLoader } from '../map-loader.service';
declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() {
    GoogleMapsLoader.load()
      .then( () => {
        this.loadMap();
      })
  }

  ngOnInit() {

  }

  loadMap(){
    console.log(google);
    var Boston = {lat: 42.361145, lng: -71.057083};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: Boston,
      draggable: false,
      scaleControl: false,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false
    });
    var marker = new google.maps.Marker({
      position: Boston,
      map: map
    });
  }
}
