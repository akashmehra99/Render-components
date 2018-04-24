import { Component } from '@angular/core';
import { Comp1Component } from './comp-1/comp-1.component';
import { Comp2Component } from './comp-2/comp-2.component';
import { Comp3Component } from './comp-3/comp-3.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  components = [Comp1Component, Comp2Component, Comp3Component];

}
