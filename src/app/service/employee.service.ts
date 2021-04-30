import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/dto/department';
import { Employee } from '../model/dto/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private departments!: Department[];
  private employees!: Employee[];
  private employee!: Employee;
  
  constructor() {
    
    this.departments = [
      new Department(1, "Data Science"),
      new Department(2, "Software Engineer"),
      new Department(3, "Marketing")
    ];
    
    this.employees = [
      new Employee(1, "selim", "horri", "selimhorri@gmail.com", "https://bootdey.com/img/Content/avatar/avatar7.png", new Date("2019-04-15"), "22125144", this.departments[2]),
      new Employee(2, "amine", "ladjimi", "amineladjimi@yahoo.fr", "https://bootdey.com/img/Content/avatar/avatar5.png", new Date("2021-04-01"), "22125144", this.departments[1]),
      new Employee(3, "omar", "derouiche", "omarderouiche@gmail.com", "https://bootdey.com/img/Content/avatar/avatar6.png", new Date("2020-04-01"), "22125144", this.departments[3])
    ];
    
  }
  
  public findAll(): Employee[] {
    return this.employees;
  }
  
  public findById(id: number): Employee {
    this.employees.forEach(
      (e: Employee) => {
        if (e.id === id) {
          this.employee = e;
        }
      }
    );
    
    return this.employee;
  }
  
  public save(employee: Employee): Employee {
    this.employee = employee;
    this.employees.push(this.employee);
    return this.employee;
  }
  
  public update(employee: Employee): Employee {
    this.employees.forEach(
      (e: Employee) => {
        if (e.id === employee.id) {
          this.employee = employee;
        }
      }
    );
    
    return this.employee
  }
  
  public deleteById(id: number): void {
    delete this.employees[this.findById(id).id];
  }
  
  
  
}






