import { Component, OnInit } from '@angular/core';
import {ICar} from "../../models/ICar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  cars : ICar[] = [
    {
      id : 1,
      brand : "bmw",
      model : "M3",
      color : "black",
      price : 50000
    },
    {
      id : 2,
      brand : "mercedes",
      model : "S63 AMG",
      color : "gray",
      price : 50000
    },
    {
      id : 3,
      brand : "toyota",
      model : "supra",
      color : "orange",
      price : 50000
    }
  ]
  constructor() {
  }

  ngOnInit() {}

  addCarFromChild(car : ICar) : void{
    this.cars.push(car);
  }

}
