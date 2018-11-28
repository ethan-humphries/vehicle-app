import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Vehicle } from '../classes/Vehicle.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {
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

}
