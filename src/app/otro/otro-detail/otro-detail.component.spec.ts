import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroDetailComponent } from './otro-detail.component';

describe('OtroDetailComponent', () => {
  let component: OtroDetailComponent;
  let fixture: ComponentFixture<OtroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
