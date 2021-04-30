import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './component/department/department.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ng", component: HomeComponent },
  { path: "ng/employees", component: EmployeeComponent },
  { path: "ng/departments", component: DepartmentComponent },
  
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
