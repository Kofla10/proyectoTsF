import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardProductoPage } from './view-card-producto.page';

describe('ViewCardProductoPage', () => {
  let component: ViewCardProductoPage;
  let fixture: ComponentFixture<ViewCardProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCardProductoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCardProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
