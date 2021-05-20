import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBanner1Component } from './icon-banner1.component';

describe('IconBanner1Component', () => {
  let component: IconBanner1Component;
  let fixture: ComponentFixture<IconBanner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBanner1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBanner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
