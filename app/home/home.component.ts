import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../classes/Vehicle.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {

  }

  welcomeScreen :  boolean =  true;
  removeWelcomeScreen(){
    this.welcomeScreen =  false;
  }
}
