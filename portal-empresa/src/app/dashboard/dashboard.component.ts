import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  employees = [
  { id: 1, name: 'Juan Pérez', role: 'Gerente' },
  { id: 2, name: 'Ana Gómez', role: 'Contadora' },
  { id: 3, name: 'Luis Martínez', role: 'Desarrollador' },
];

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  editEmployee(emp: any) {
    console.log('Editar empleado:', emp);
    
  }

  deleteEmployee(id: number) {
    console.log('Eliminar empleado con ID:', id);
  
    this.employees = this.employees.filter(e => e.id !== id);
  }
}
