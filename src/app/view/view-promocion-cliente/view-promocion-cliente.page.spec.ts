import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPromocionClientePage } from './view-promocion-cliente.page';

describe('ViewPromocionClientePage', () => {
  let component: ViewPromocionClientePage;
  let fixture: ComponentFixture<ViewPromocionClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPromocionClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPromocionClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
