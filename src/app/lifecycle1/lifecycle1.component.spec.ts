import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle1Component } from './lifecycle1.component';

describe('Lifecycle1Component', () => {
  let component: Lifecycle1Component;
  let fixture: ComponentFixture<Lifecycle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lifecycle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
