import {Component, OnInit, Input} from '@angular/core';
import {ICar} from "../../../models/ICar";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  @Input() car? : ICar

  constructor() {
  }
  ngOnInit() {
  }
}
