import { EmployeeService } from '../../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  error = false;
  errorMessage = "";

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {

  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {

    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
      this.employee = new Employee();
      this.gotoList();
  }

  onSubmit() {


    let response =  this.employeeService.getEmployeeByEmail(this.employee.emailId)
                        .subscribe(
                          data => {

                              if(data == null) {

                                        this.submitted = true;
                                        this.save();
                              }else{
                                      this.error = true;
                                      this.errorMessage = this.employee.emailId + " already exists";
                                      this.submitted = false;
                                    }
                            console.log("data==>", data);

                           },
                          error => {
                         /*       if(error.error != null) {

                                         this.submitted = true;
                                          this.save();
                                }else{
                                        this.error = true;
                                        this.submitted = false;
                                      }
                             this.submitted = true;
                             this.error = false; */
                              console.log("error==>", error);

                          });

      console.log("response==>",response)


  }





  gotoList() {
    this.router.navigate(['/employees']);
  }
}
