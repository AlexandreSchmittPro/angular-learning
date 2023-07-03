import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICar} from "../../../models/ICar";

@Component({
  selector: 'app-button-add-car',
  templateUrl: './button-add-car.component.html',
  styleUrls: ['./button-add-car.component.scss']
})
export class ButtonAddCarComponent implements OnInit{
  @Output() newCarEvent = new EventEmitter<ICar>();

  car : ICar = {
    id : 4,
    brand : "tesla",
    model : "model S",
    color : "white",
    price : 1
  }

  addNewCarToParent() {
    this.newCarEvent.emit(this.car);
  }
  constructor() {}

  ngOnInit() {
  }

}
