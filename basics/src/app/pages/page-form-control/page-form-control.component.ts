import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-page-form-control',
  templateUrl: './page-form-control.component.html',
  styleUrls: ['./page-form-control.component.scss']
})
export class PageFormControlComponent implements OnInit{

  city = new FormControl();

  constructor() {}

  ngOnInit() {}

  getDataFromInput(dataInput : string) : void {
    console.log("Whoopty : ", dataInput);
  }
}
