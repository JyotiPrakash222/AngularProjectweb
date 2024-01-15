import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pro5Component } from './pro5.component';

describe('Pro5Component', () => {
  let component: Pro5Component;
  let fixture: ComponentFixture<Pro5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pro5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pro5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
