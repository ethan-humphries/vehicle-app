import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Vehicle } from '../classes/Vehicle.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {

  vehicles : Vehicle[];
  vehicle :  Vehicle = {
    registration: '',
    make: '',
    model: '',
    transmission: '',
    bodyShape: '',
    year: null,
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.vehicles = this.dataService.getVehicles();
  }

  vehiclesAdded : number = 0
  submitted : boolean =  false;
  validates : boolean = true;
  error : string = "";

  onSubmit(vehicle : Vehicle) {
    for(let v of this.vehicles){
      if(vehicle.registration == v.registration){
        this.validates = false;
        this.error = "The registration number already exists!"
        return;
      }
    }

    if (vehicle.registration !="" && vehicle.make !="" && vehicle.model!="" && vehicle.bodyShape!="" && vehicle.transmission!=""){
    this.vehicles.unshift(vehicle)
    this.submitted = true;
    this.validates =  true;
    this.vehiclesAdded++;
    } else {
      this.validates =  false;
      this.error = "It seems you've missed a few fields!"
    }
  }

}
