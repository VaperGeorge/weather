import { Component } from '@angular/core';
import { LoggerService } from './services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Weather';

  constructor(protected loggerService: LoggerService) {
    this.loggerService.setUser();
    const user = this.loggerService.getUser();
    console.log(user);
  }
}
