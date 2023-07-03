import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-page-form-builder',
  templateUrl: './page-form-builder.component.html',
  styleUrls: ['./page-form-builder.component.scss']
})
export class PageFormBuilderComponent implements OnInit{

  form = this.fb.group(
{
  username : ["", [Validators.required]],
  firstName : ["", [Validators.required]],
  lastName : ["", [Validators.required]],
  email : ["", [Validators.required]],
  address : this.fb.group({
    city : ["", [Validators.required]],
    code : ["", [Validators.required]],
    street : ["", [Validators.required]]
    })
  })

  constructor(private fb : FormBuilder ) {}

  ngOnInit() {
    // this.form.patchValue(this.getUserById(5))
  }

  onSubmit() : void {
    console.log("Form : ",  this.form.controls['username'].errors);
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
