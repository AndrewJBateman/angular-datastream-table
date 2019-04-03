import { Component, OnInit } from '@angular/core';
import { NgAlertService, MessageType } from '@theo4u/ng-alert';

import { EmployeeService } from './../services/employee.service';
import { IEmployee } from '../interfaces/iemployee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styles: []
})
export class ListEmployeeComponent implements OnInit {
  employees: IEmployee[] = [];
  loading = true;

  constructor(private _employeeService: EmployeeService, private _ngAlert: NgAlertService) { }

  ngOnInit() {
    this.loading = true;
    this._employeeService.list()
      .subscribe(employees => {
        this.loading = false;
        this.employees = employees;
      });
  }

  delete(employee: IEmployee) {
    // show delete confirmation with ngAlert
    this._ngAlert.push({
      message: `<strong>Are you sure!</strong> you want to delete this employee with name <strong>${employee.name}</strong>`,
      type: MessageType.warning,
      buttons: [
        {
          label: 'Continue',
          action: () => {
            this._actualDelete(employee);
          },
          css: 'btn btn-danger'
        }
      ]
    });
  }

  private _actualDelete (employee: IEmployee) {
    this._employeeService.delete(employee)
    .subscribe(() => {
      // remove the employee if removed successfully
      this.employees = this.employees.filter(item => item !== employee);
      this._ngAlert.push({
        message: `${employee.name} removed`,
        type: MessageType.success
      });
    });
  }
}
