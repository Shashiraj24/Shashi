import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tempate1Component } from './tempate1.component';

describe('Tempate1Component', () => {
  let component: Tempate1Component;
  let fixture: ComponentFixture<Tempate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tempate1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tempate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
