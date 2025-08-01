import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees: Employee[] = [];
  private idCounter = 1;

  getAll(): Employee[] {
    return this.employees;
  }

  add(employee: Omit<Employee, 'id'>): void {
    this.employees.push({ ...employee, id: this.idCounter++ });
  }

  update(updated: Employee): void {
    const index = this.employees.findIndex(e => e.id === updated.id);
    if (index !== -1) this.employees[index] = updated;
  }

  delete(id: number): void {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}
