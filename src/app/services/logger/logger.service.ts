import { Injectable } from '@angular/core';

@Injectable()
export abstract class LoggerService {
  abstract setUser(): void;

  abstract getUser(): string;

  abstract login(): void;
}
