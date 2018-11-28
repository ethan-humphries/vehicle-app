import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Vehicle } from '../classes/Vehicle.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent implements OnInit {
  vehicles : Vehicle[];
  vehicle :  Vehicle = {
    registration: '',
    make: '',
    model: '',
    transmission: '',
    bodyShape: '',
    year: null,
  }
  errorMessage :  string = "";
  message : string = ""
  vehicleFound : boolean = false;
  submitted : boolean = false;
  removed : boolean =  false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.vehicles = this.dataService.getVehicles();
  }

  findVehicle(rego : string){
    this.vehicle.registration = rego.toUpperCase();
    for(let v of this.vehicles){
      if(v.registration == this.vehicle.registration){
        this.vehicle.make = v.make;
        this.vehicle.model = v.model;
        this.vehicle.bodyShape = v.bodyShape;
        this.vehicle.transmission = v.transmission;
        this.vehicleFound =  true;
        this.submitted =  true;
        return;
      }
      else {
        this.errorMessage = "Vehicle not found"
        this.vehicleFound =  false;
        this.submitted =  true;
      }
    }

  }

  removeVehicle(){
    //remove the vehicle
    let index : number = this.vehicles.findIndex(x => x.registration == this.vehicle.registration);
    this.vehicles.splice(index, 1);
    this.message = "Vehicle Removed"
    this.removed = true;
    console.log(this.vehicles);
 }

}

