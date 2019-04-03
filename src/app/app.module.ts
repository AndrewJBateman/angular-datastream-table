
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgAlertModule } from '@theo4u/ng-alert';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PusherService } from './services/pusher.service';
import { EmployeeService } from './services/employee.service';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgAlertModule,
    HttpClientModule
  ],
  providers: [PusherService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
