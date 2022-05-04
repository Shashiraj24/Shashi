import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { Directives1Component } from './directives1/directives1.component';
import { ServiceAppComponent } from './service-app/service-app.component';
import { Lifecycle1Component } from './lifecycle1/lifecycle1.component';
import { Child1Component } from './lifecycle1/child1/child1.component';
import { Pipe1Component } from './pipe1/pipe1.component';
import { Tempate1Component } from './tempate1/tempate1.component';
import { Reactive1Component } from './reactive1/reactive1.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    Directives1Component,
    ServiceAppComponent,
    Lifecycle1Component,
    Child1Component,
    Pipe1Component,
    Tempate1Component,
    Reactive1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
