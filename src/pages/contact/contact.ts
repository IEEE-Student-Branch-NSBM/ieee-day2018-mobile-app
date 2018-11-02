import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  map : any;
  marker :any;
  image : any;
  beachMarker : any;

  constructor(public navCtrl: NavController) {
    const that = this;
    setTimeout(function () {
      that.googlemap();
    },2000);

  } 


  googlemap(){

      // The location of Uluru,
      var nsbm = {lat: 6.821420, lng: 80.041590};


     
     this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 6.8553213, lng: 79.9890768},
        zoom: 10,
        gestureHandling: 'greedy'
      });


      // The marker, positioned at Uluru
      //this.marker = new google.maps.Marker({position: nsbm, map: this.map});


      this.image = 'assets/imgs/favicon.ico';
      this.beachMarker = new google.maps.Marker({
        position: nsbm,
        map: this.map,
        icon: this.image
      });
    }


    




  }


