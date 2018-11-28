import { Injectable } from '@angular/core';
import { Vehicle } from '../classes/Vehicle.class';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  vehicles : Vehicle[];
  vehicle :  Vehicle = {
    registration: '',
    make: '',
    model: '',
    transmission: '',
    bodyShape: '',
    year: null,
  }

  constructor() {
    this.vehicles = [
      {
      registration : "ABC123",
      make : "Ford",
      model : "Falcon",
      transmission : "Manual",
      bodyShape : "Ute",
      year : 2001
    },
    {
      registration : "ABC124",
      make : "Lexus",
      model : "Swag",
      transmission : "Automatic",
      bodyShape : "Sedan",
      year : 2018
    },
    {
      registration : "ADC123",
      make : "Honda",
      model : "Accord",
      transmission : "Manual",
      bodyShape : "Hatch",
      year : 1995
    },
    {
      registration : "AHC122",
      make : "Lexus",
      model : "S22",
      transmission : "Manual",
      bodyShape : "Sedan",
      year : 2005
    },
    {
      registration : "ABC000",
      make : "Toyota",
      model : "Aurion",
      transmission : "Automatic",
      bodyShape : "Sedan",
      year : 2012
    },
    {
      registration : "DCD10F",
      make : "Ford",
      model : "Falcon",
      transmission : "Manual",
      bodyShape : "Ute",
      year : 2005
    },
    {
      registration : "CIC10F",
      make : "Hyundi",
      model : "I20",
      transmission : "Manual",
      bodyShape : "Hatch",
      year : 2010
    },
    {
      registration : "BWL40F",
      make : "Mercedes",
      model : "Deluxe",
      transmission : "Automatic",
      bodyShape : "Sedan",
      year : 2009
    },
    {
      registration : "ETH093",
      make : "Toyota",
      model : "FJ62",
      transmission : "Manual",
      bodyShape : "4x4",
      year : 1985
    }
    ]; 
   }

   getVehicles(): Vehicle[] {
     return this.vehicles;
   }


}
