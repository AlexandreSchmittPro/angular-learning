import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-page-form-group',
  templateUrl: './page-form-group.component.html',
  styleUrls: ['./page-form-group.component.scss']
})
export class PageFormGroupComponent implements  OnInit{

  form = new FormGroup({
    username : new FormControl(),
    firstName : new FormControl(),
    lastName : new FormControl(),
    email : new FormControl(),
    address : new FormGroup({
      city : new FormControl(),
      code : new FormControl(),
      street : new FormControl(),
    })
  })



  constructor() {}

  ngOnInit() {
    // this.form.patchValue(this.getUserById(5));
  }

  onSubmit() : void {
    console.log("Form : ", this.form.value);
  }

  getUserById(id : number) : any {
    const data = {
      username : "luffy",
      firstName : "alex",
      lastName : "sch",
      email : "alexandre.schmitt@businessdecision.lu",
      address : {
        city : "yutz",
        code : "57970",
        street : "3 rue beethoven"
      }
    }
    return data
  }
}
