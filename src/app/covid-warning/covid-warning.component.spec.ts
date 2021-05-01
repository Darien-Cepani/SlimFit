import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidWarningComponent } from './covid-warning.component';

describe('CovidWarningComponent', () => {
  let component: CovidWarningComponent;
  let fixture: ComponentFixture<CovidWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
