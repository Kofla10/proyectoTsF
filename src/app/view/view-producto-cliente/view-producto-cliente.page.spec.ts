import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductoClientePage } from './view-producto-cliente.page';

describe('ViewProductoClientePage', () => {
  let component: ViewProductoClientePage;
  let fixture: ComponentFixture<ViewProductoClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductoClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
