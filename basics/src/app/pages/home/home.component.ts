import { Component } from '@angular/core';
import { ColorsEnum } from 'src/app/enum/colors.enum';
import { ICars } from 'src/app/models/ICars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  firstName : string = "Alex";
  age : number = 26;
  presentation : string = `${this.firstName} is ${this.age} years old`;
  data : ICars[] = [
    {
      id : 1,
      brand : "BMW",
      model : "serie 1",
      color : ColorsEnum.BLACK,
      price : 30000
    },
    {
      id : 2,
      brand : "MERCEDES",
      model : "class A",
      color : ColorsEnum.GRAY,
      price : 20000
    },
    {
      id : 3,
      brand : "TESLA",
      model : "model S",
      color : ColorsEnum.WHITE,
      price : 50
    }
  ];
  constructor() {
    console.log("---------------------");
    console.log("Firstname : ", this.firstName, " typeof :", typeof this.firstName);
    console.log("Age : ", this.age, " typeof : ", typeof this.age);
    console.log("Presentation : ", this.presentation);
    console.log("---------------------");

    this.data.forEach((car) => {
      console.log(`Car N°${car.id} : `);
      console.log("Brand : ", car.brand);
      console.log("Model : ", car.model);
      console.log("Color : ", car.color);
      console.log("Price : ", car.price);
      console.log("---------------------");
    })
  }
}
