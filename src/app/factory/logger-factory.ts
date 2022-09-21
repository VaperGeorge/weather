import { HttpClient } from '@angular/common/http';

import { Environment } from '../interfaces/environment';
import { DevelopLoggerService } from '../services/logger/develop-logger.service';
import { LoggerService } from '../services/logger/logger.service';
import { ProdLoggerService } from '../services/logger/prod-logger.service';

export function loggerFactory(http: HttpClient, environment: Environment): LoggerService {
  switch (environment.name) {
    case 'dev': {
      return new DevelopLoggerService();
    }
    case 'production': {
      return new ProdLoggerService(http, environment);
    }
  }
}
