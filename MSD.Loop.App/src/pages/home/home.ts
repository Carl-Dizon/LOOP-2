import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  square = [
    {name: 'Projekt 1', percent: 63, src: "../assets/images/building1.jpg"},
    {name: 'Projekt 2', percent: 5, src: "../assets/images/building2.jpg"}
  ]

  constructor(public navCtrl: NavController) {

  }

}
