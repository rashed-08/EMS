import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
    // tslint:disable-next-line: no-string-literal
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(
      data => {
        this.employee = data;
      },
      errors => console.log(errors)
    );
  }

  onSubmit() {
    console.log(this.employee);
    this.employeeService.updatedEmployee(this.id, this.employee).subscribe();
  }

  /**
   * Back to employe list
   */
  public list() {
    this.router.navigate(['employees']);
  }
}
