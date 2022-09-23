import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { City } from 'src/app/interfaces/city';
import { cities } from 'src/assets/api/cities';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
})
export class CitiesListComponent {
  checkAdapter = this.fb.control(false);

  public cities$ = new BehaviorSubject<Array<City>>(cities);

  constructor(protected fb: FormBuilder) {}
}
