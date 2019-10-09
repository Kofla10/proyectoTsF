import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuPage } from './view-menu.page';

describe('ViewMenuPage', () => {
  let component: ViewMenuPage;
  let fixture: ComponentFixture<ViewMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
