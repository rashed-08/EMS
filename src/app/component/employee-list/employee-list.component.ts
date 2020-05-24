import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    return this.employeeService.getAllEmployee().subscribe(
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
    this.employeeService.deleteEmployee(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      errors => {
        console.log(errors);
      }
    );
  }

}
