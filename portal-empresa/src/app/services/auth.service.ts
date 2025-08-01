import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private validUser = { email: 'empleado@empresa.com', password: '1234' };

  login(email: string, password: string): boolean {
    if (email === this.validUser.email && password === this.validUser.password) {
      localStorage.setItem('token', 'fake-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
