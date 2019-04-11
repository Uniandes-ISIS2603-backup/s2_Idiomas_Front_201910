import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroEditComponent } from './otro-edit.component';

describe('OtroEditComponent', () => {
  let component: OtroEditComponent;
  let fixture: ComponentFixture<OtroEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtroEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
