import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/dto/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  public employees!: Employee[];
  public employee!: Employee;
  
  constructor(private employeeService: EmployeeService) {
    
  }
  
  ngOnInit(): void {
    this.save(new Employee(555, "selimmmmmmmm", "horriiiiiiiiiiiiiiiiiiii", "selimhorri@gmail.com", "https://bootdey.com/img/Content/avatar/avatar7.png", new Date("2019-04-15"), "22125144", environment.departments[3]));
    this.findAll();
  }
  
  public findAll(): void {
    this.employees = this.employeeService.findAll();
  }
  
  public findById(id: number): void {
    this.employee = this.employeeService.findById(id);
  }
  
  public save(employee: Employee): void {
    this.employee = this.employeeService.save(employee);
  }
  
  
  
}
