import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  private employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe(
      data => {
        this.employees = data;
      },
      errors => console.log(errors)
    );
  }

  public employeeDetails(id: number) {
    console.log('Employee details: ' + id);
  }

  /**
   * employeeUpdate
   */
  public employeeUpdate(id: number) {
    console.log('Employee Update: ' + id);
  }

  public deleteEmployee(id: number) {
    console.log('Delete Employee: ' + id);
  }

}
