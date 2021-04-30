import { Department } from "./department";

export class Employee {
  
  constructor(
    public id: number,
    public fname: string,
    public lname: string,
    public email: string,
    public imageUrl: string,
    public hiredate: Date,
    public phone: string,
    public department: Department) {
    
  }
  
  
  
}
