import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pro4Component } from './pro4.component';

describe('Pro4Component', () => {
  let component: Pro4Component;
  let fixture: ComponentFixture<Pro4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pro4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
