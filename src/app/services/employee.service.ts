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
    this.url = 'http://10.42.0.1:8080//api/v1/employees';
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
}
