/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockControlComponent } from './stockControl.component';

describe('StockControlComponent', () => {
  let component: StockControlComponent;
  let fixture: ComponentFixture<StockControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
