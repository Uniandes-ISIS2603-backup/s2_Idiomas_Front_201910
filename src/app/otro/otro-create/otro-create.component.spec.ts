import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroCreateComponent } from './otro-create.component';

describe('OtroCreateComponent', () => {
  let component: OtroCreateComponent;
  let fixture: ComponentFixture<OtroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
