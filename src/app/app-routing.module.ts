import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { AboutComponent } from './component/about/about.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  },
  {
    path: 'update-employee/:id',
    component: UpdateEmployeeComponent
  },
  {
    path: 'details/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
