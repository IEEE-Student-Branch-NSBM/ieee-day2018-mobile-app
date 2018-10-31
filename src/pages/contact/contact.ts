import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  map : any;

  constructor(public navCtrl: NavController) {
    const that = this;
    setTimeout(function () {
      that.googlemap();
    },2000);

  } 


  googlemap(){
     
     this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 6.8553213, lng: 79.9890768},
        zoom: 10,
        gestureHandling: 'greedy'
      });
    




  }

}
