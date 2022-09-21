import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Environment } from 'src/app/interfaces/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdLoggerService {
  constructor(
    protected http: HttpClient,
    @Inject('') protected readonly environment: Environment,
  ) {}

  setUser() {
    localStorage.setItem('user', 'Production/Live user');
  }

  getUser(): string {
    return localStorage.getItem('user') as string;
  }

  login() {
    this.http.post(this.environment.apiUrl + '/login', {});
    console.log('LOGIN USER PRODUCTION');
  }
}
