import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CitiesListComponent, CityItemComponent } from './components';
import { LoggerService } from './services/logger/logger.service';
import { loggerFactory } from './factory/logger-factory';
import { environment } from 'src/environments/environment';

export const Environment = new InjectionToken('Environment');

@NgModule({
  declarations: [AppComponent, CityItemComponent, CitiesListComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [HttpClient, Environment],
      // we tell Angular to provide this dependencies
      // to the factory arguments
    },
    { provide: Environment, useValue: environment },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
