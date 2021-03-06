import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string;

  constructor(private http: HttpClient, router: Router) {
    this.url = 'https://ems-crud.herokuapp.com/api/v1/employees';
  }

  /**
   * submitEmployee method send frontend information to the backend through api, passing as jsob object.
   */
  public submitEmployee(employee: Employee) {
    return this.http.post<Employee>(this.url, employee);
  }

  /**
   * fetch all employee from api
   */
  public getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  /**
   * deleteEmployee
   */
  public deleteEmployee(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  /**
   * getEmployee is a method which retrive single Employee
   */
  public getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  public updatedEmployee(id: number, employee: Employee) {
    return this.http.put(`${this.url}/${id}`, employee);
  }

}
