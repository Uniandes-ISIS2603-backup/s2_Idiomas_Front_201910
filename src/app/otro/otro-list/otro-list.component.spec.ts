import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroListComponent } from './otro-list.component';

describe('OtroListComponent', () => {
  let component: OtroListComponent;
  let fixture: ComponentFixture<OtroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
