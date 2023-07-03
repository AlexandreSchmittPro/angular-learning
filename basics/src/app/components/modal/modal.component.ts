import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver, ComponentRef,
  ElementRef, Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Observable} from "rxjs";
import {ButtonAddCarComponent} from "../../pages/home/button-add-car/button-add-car.component";
import {ChildComponent} from "../../pages/home/child/child.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  @ViewChild('container', { read: ViewContainerRef, static: true }) container?: ViewContainerRef;

  @Input() componentName?: string;

  private componentRef?: ComponentRef<unknown>;

  private componentsMapping = {
    buttonAddCarComponent: ButtonAddCarComponent,
    childComponent: ChildComponent
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    // @ts-ignore
    const component =this.componentsMapping[this.componentName];

    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.container!.createComponent(factory);

  }
}
