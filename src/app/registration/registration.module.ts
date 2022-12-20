import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FormsModule } from '@angular/forms';
import { ValidationComponent } from '../validation/validation.component';

@NgModule({
  declarations:[
      CreateEmployeeComponent,
      EmployeeDetailsComponent,
      EmployeeListComponent,
      UpdateEmployeeComponent,
      ValidationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegistrationRoutingModule
  ]

})
export class RegistrationModule { }
