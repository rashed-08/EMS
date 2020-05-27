import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService) {
    this.employee = new Employee();
  }

  ngOnInit() {
  }

  public emsSubmit() {
    this.employeeService.submitEmployee(this.employee).subscribe();
  }

}
