import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadiaEditComponent } from './estadia-edit.component';

describe('EstadiaEditComponent', () => {
  let component: EstadiaEditComponent;
  let fixture: ComponentFixture<EstadiaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadiaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadiaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
