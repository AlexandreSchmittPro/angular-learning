import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PageFormControlComponent } from './page-form-control/page-form-control.component';
import { PageFormGroupComponent } from './page-form-group/page-form-group.component';
import { PageFormBuilderComponent } from './page-form-builder/page-form-builder.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [

    HomeComponent,
       PageFormControlComponent,
       PageFormGroupComponent,
       PageFormBuilderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
