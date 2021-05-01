import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainsComponent } from './contains.component';

describe('ContainsComponent', () => {
  let component: ContainsComponent;
  let fixture: ComponentFixture<ContainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
