import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './home/child/child.component';
import { ButtonAddCarComponent } from './home/button-add-car/button-add-car.component';
import {ComponentsModule} from "../components/components.module";


@NgModule({
  declarations: [

    HomeComponent,
    ChildComponent,
    ButtonAddCarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
