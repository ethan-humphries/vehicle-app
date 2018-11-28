import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { Vehicle } from '../classes/Vehicle.class';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent implements OnInit {
  
  vehicles : Vehicle[];

  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
    this.vehicles = this.dataService.getVehicles();
  }

  show :  boolean =  false;
  showDetails(){
    this.show = !this.show;
  }
}
