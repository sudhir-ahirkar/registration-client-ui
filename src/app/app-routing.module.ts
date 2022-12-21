 // import { EmployeeDetailsComponent } from './registration/employee-details/employee-details.component';
// import { CreateEmployeeComponent } from './registration/create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RegistrationModule } from './registration/registration.module';
// import { EmployeeListComponent } from './registration/employee-list/employee-list.component';
// import { UpdateEmployeeComponent } from './registration/update-employee/update-employee.component';

const routes: Routes = [
  // { path: '', redirectTo: 'employee', pathMatch: 'full' },
  // { path: 'employees', component: EmployeeListComponent },
  // { path: 'add', component: CreateEmployeeComponent },
  // { path: 'details/:id', component: EmployeeDetailsComponent },
  // { path: 'update/:id', component: UpdateEmployeeComponent },
  {
    path: '',
    // loadChildren: './registration/registration.module#RegistrationModule',
    // loadChildren : () => RegistrationModule
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
