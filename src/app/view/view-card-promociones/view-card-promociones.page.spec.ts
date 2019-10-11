import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardPromocionesPage } from './view-card-promociones.page';

describe('ViewCardPromocionesPage', () => {
  let component: ViewCardPromocionesPage;
  let fixture: ComponentFixture<ViewCardPromocionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCardPromocionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCardPromocionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
