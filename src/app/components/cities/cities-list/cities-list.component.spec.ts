import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesListComponent } from './cities-list.component';

describe('CitiesListComponent', () => {
  let component: CitiesListComponent;
  let fixture: ComponentFixture<CitiesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
