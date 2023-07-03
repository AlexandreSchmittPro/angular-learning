import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import {HomeComponent} from "./home/home.component";
import {PageFormControlComponent} from "./page-form-control/page-form-control.component";
import {PageFormGroupComponent} from "./page-form-group/page-form-group.component";
import {PageFormBuilderComponent} from "./page-form-builder/page-form-builder.component";

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'form-control', component : PageFormControlComponent},
  {path : 'form-group', component : PageFormGroupComponent},
  {path : 'form-builder', component : PageFormBuilderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {

}
