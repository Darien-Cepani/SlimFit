import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeForEffectComponent } from './time-for-effect.component';

describe('TimeForEffectComponent', () => {
  let component: TimeForEffectComponent;
  let fixture: ComponentFixture<TimeForEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeForEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeForEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
