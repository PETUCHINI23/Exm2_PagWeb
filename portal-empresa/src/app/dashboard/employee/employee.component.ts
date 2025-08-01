import { Component } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;
  showDialog = false;
  isEdit = false;

  name = '';
  role = '';

  constructor(private empService: EmployeeService) {
    this.employees = this.empService.getAll();
  }

  openNew() {
    this.isEdit = false;
    this.name = '';
    this.role = '';
    this.showDialog = true;
  }

  edit(employee: Employee) {
    this.isEdit = true;
    this.selectedEmployee = { ...employee };
    this.name = employee.name;
    this.role = employee.role;
    this.showDialog = true;
  }

  save() {
    if (this.isEdit && this.selectedEmployee) {
      this.empService.update({ id: this.selectedEmployee.id, name: this.name, role: this.role });
    } else {
      this.empService.add({ name: this.name, role: this.role });
    }
    this.employees = this.empService.getAll();
    this.showDialog = false;
  }

  delete(id: number) {
    this.empService.delete(id);
    this.employees = this.empService.getAll();
  }
}
