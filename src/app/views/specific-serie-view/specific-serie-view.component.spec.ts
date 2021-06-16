import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificSerieViewComponent } from './specific-serie-view.component';

describe('SpecificSerieViewComponent', () => {
  let component: SpecificSerieViewComponent;
  let fixture: ComponentFixture<SpecificSerieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificSerieViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificSerieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
