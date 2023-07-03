import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './layouts/header/header.component';
import { ModalComponent } from './modal/modal.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports : [
    HeaderComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
