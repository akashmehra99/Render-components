import { Component, ViewContainerRef, ViewChild, Input, Compiler,
   ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('target', {read: ViewContainerRef}) target;
  @Input() type;
  cmpRef: ComponentRef <Component>;
  private isViewInitialized = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler,
      private cdRef: ChangeDetectorRef) {}

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory);
    this.cdRef.detectChanges();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
