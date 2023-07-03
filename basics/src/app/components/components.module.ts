import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './layouts/header/header.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
  exports : [
    HeaderComponent
  ]
})
export class ComponentsModule { }
