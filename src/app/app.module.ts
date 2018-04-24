import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Comp1Component } from './comp-1/comp-1.component';
import { Comp2Component } from './comp-2/comp-2.component';
import { Comp3Component } from './comp-3/comp-3.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    WrapperComponent,
    TabsComponent
  ],
  entryComponents: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
