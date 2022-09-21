import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DevelopLoggerService {
  setUser() {
    localStorage.setItem('user', 'Dev user');
  }

  getUser(): string {
    return localStorage.getItem('user') as string;
  }

  login() {
    console.log('LOGIN USER DEVELOP');
  }
}
