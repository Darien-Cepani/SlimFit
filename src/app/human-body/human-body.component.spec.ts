import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanBodyComponent } from './human-body.component';

describe('HumanBodyComponent', () => {
  let component: HumanBodyComponent;
  let fixture: ComponentFixture<HumanBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
