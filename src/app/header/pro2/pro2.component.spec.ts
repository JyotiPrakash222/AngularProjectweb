import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pro2Component } from './pro2.component';

describe('Pro2Component', () => {
  let component: Pro2Component;
  let fixture: ComponentFixture<Pro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pro2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
